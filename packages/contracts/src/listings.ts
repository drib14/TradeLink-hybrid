import { ListingCondition, ListingStatus } from './enums.js';

export interface ListingImageSummary {
  id: string;
  storageKey: string;
  url: string;
  displayOrder: number;
}

export interface ListingSummary {
  id: string;
  title: string;
  price: number;
  condition: ListingCondition;
  status: ListingStatus;
  thumbnailUrl: string | null;
  categoryName: string;
  sellerDisplayName: string;
  campusName: string;
  createdAt: string;
  isFavorited?: boolean;
}

export interface ListingDetail extends ListingSummary {
  description: string;
  pickupPreference: string | null;
  images: ListingImageSummary[];
  sellerId: string;
  sellerRating: number | null;
  sellerTotalReviews: number;
  updatedAt: string;
}

export interface CreateListingRequest {
  title: string;
  description: string;
  categoryId: string;
  price: number;
  condition: ListingCondition;
  imageKeys: string[];
  pickupPreference?: string;
}

export interface UpdateListingRequest {
  title?: string;
  description?: string;
  categoryId?: string;
  price?: number;
  condition?: ListingCondition;
  imageKeys?: string[];
  pickupPreference?: string;
}

export interface UpdateListingStatusRequest {
  status: ListingStatus;
  reason?: string;
}

export interface ListingSearchParams {
  query?: string;
  categoryId?: string;
  condition?: ListingCondition;
  minPrice?: number;
  maxPrice?: number;
  campusId?: string;
  sort?: 'newest' | 'price_asc' | 'price_desc' | 'relevance';
  cursor?: string;
  limit?: number;
}
