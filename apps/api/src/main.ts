import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('TradeLinkBootstrap');
  const app = await NestFactory.create(AppModule);

  // Security HTTP Headers
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'", 'wss:', 'https:'],
        },
      },
      frameguard: { action: 'deny' },
      hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    }),
  );

  // CORS Configuration
  app.enableCors({
    origin: [
      process.env.WEB_URL || 'http://localhost:3000',
      'http://localhost:8081', // Expo local dev server
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  });

  // Global API Prefix
  app.setGlobalPrefix('api/v1');

  // Strict Input Validation & Sanitization
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Consistent Error Handler
  app.useGlobalFilters(new GlobalExceptionFilter());

  const port = process.env.PORT || 4000;
  await app.listen(port);
  logger.log(`TradeLink Modular Monolith API running on port ${port} (prefix /api/v1)`);
}

bootstrap();
