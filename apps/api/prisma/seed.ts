import * as path from 'path';
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

// Ensure environment variables are loaded from root .env or local environment
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial TradeLink database state...');

  // 1. Seed all official University of Cebu (UC) Campuses
  const ucCampuses = [
    {
      name: 'University of Cebu - Main Campus',
      branch: 'Main',
      isActive: true,
    },
    {
      name: 'University of Cebu - Banilad Campus',
      branch: 'Banilad',
      isActive: true,
    },
    {
      name: 'University of Cebu - Lapu-Lapu and Mandaue (LM)',
      branch: 'LM',
      isActive: true,
    },
    {
      name: 'University of Cebu - Maritime Education and Training Center (METC)',
      branch: 'METC',
      isActive: true,
    },
    {
      name: 'University of Cebu - Pardo-Talisay',
      branch: 'Pardo-Talisay',
      isActive: true,
    },
  ];

  const seededCampuses = [];
  for (const campusData of ucCampuses) {
    const campus = await prisma.campus.upsert({
      where: { name: campusData.name },
      update: { branch: campusData.branch, isActive: campusData.isActive },
      create: campusData,
    });
    seededCampuses.push(campus);
  }
  console.log(`Seeded ${seededCampuses.length} University of Cebu campuses.`);

  // 2. Seed Standard Student Marketplace Categories
  const categories = [
    { name: 'Books & Learning Materials', slug: 'books-learning', sortOrder: 1, icon: 'book-open' },
    { name: 'Uniforms & Apparel', slug: 'uniforms-apparel', sortOrder: 2, icon: 'shirt' },
    { name: 'Electronics & Gadgets', slug: 'electronics', sortOrder: 3, icon: 'laptop' },
    { name: 'Dorm & Living', slug: 'dorm-living', sortOrder: 4, icon: 'home' },
    { name: 'Food & Snacks', slug: 'food-snacks', sortOrder: 5, icon: 'coffee' },
    { name: 'Services & Tutoring', slug: 'services', sortOrder: 6, icon: 'briefcase' },
    { name: 'Miscellaneous', slug: 'miscellaneous', sortOrder: 7, icon: 'grid' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, sortOrder: cat.sortOrder, icon: cat.icon },
      create: { ...cat, isActive: true },
    });
  }
  console.log(`Seeded ${categories.length} marketplace categories.`);

  // 3. Seed Super Admin securely via environment variables (prevents git credential exposure)
  const adminEmail = process.env.ADMIN_DEFAULT_EMAIL || 'uc.tradelink@gmail.com';
  const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD;
  const adminDisplayName = process.env.ADMIN_DEFAULT_NAME || 'TradeLink Administrator';

  if (!adminPassword) {
    console.warn(
      '⚠️ Warning: ADMIN_DEFAULT_PASSWORD not found in environment. Please set it in your local .env to complete admin provisioning.',
    );
  } else {
    const adminPasswordHash = await argon2.hash(adminPassword, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 4,
    });

    const mainCampus = seededCampuses[0];

    await prisma.user.upsert({
      where: { email: adminEmail },
      update: {
        passwordHash: adminPasswordHash,
        displayName: adminDisplayName,
        role: 'ADMIN',
        verificationStatus: 'CAMPUS_VERIFIED',
        accountStatus: 'ACTIVE',
      },
      create: {
        email: adminEmail,
        displayName: adminDisplayName,
        passwordHash: adminPasswordHash,
        role: 'ADMIN',
        verificationStatus: 'CAMPUS_VERIFIED',
        accountStatus: 'ACTIVE',
        campusId: mainCampus.id,
      },
    });

    console.log(`Admin account [${adminEmail}] successfully provisioned.`);
  }

  console.log('TradeLink database seeding complete.');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
