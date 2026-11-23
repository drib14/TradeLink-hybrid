export enum UserRole {
  GUEST = 'GUEST',
  STUDENT = 'STUDENT',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  DEACTIVATED = 'DEACTIVATED',
}

export enum VerificationStatus {
  UNVERIFIED = 'UNVERIFIED',
  EMAIL_VERIFIED = 'EMAIL_VERIFIED',
  CAMPUS_VERIFIED = 'CAMPUS_VERIFIED',
}

export enum ListingStatus {
  DRAFT = 'DRAFT',
  PENDING_REVIEW = 'PENDING_REVIEW',
  PUBLISHED = 'PUBLISHED',
  RESERVED = 'RESERVED',
  SOLD = 'SOLD',
  ARCHIVED = 'ARCHIVED',
  REMOVED = 'REMOVED',
}

export enum ListingCondition {
  NEW = 'NEW',
  LIKE_NEW = 'LIKE_NEW',
  GOOD = 'GOOD',
  FAIR = 'FAIR',
  POOR = 'POOR',
}

export enum ReportStatus {
  PENDING = 'PENDING',
  UNDER_REVIEW = 'UNDER_REVIEW',
  RESOLVED = 'RESOLVED',
  DISMISSED = 'DISMISSED',
}

export enum ReportTargetType {
  LISTING = 'LISTING',
  USER = 'USER',
  CONVERSATION = 'CONVERSATION',
}

export enum NotificationType {
  NEW_MESSAGE = 'NEW_MESSAGE',
  LISTING_UPDATE = 'LISTING_UPDATE',
  REPORT_UPDATE = 'REPORT_UPDATE',
  ACCOUNT_UPDATE = 'ACCOUNT_UPDATE',
  MODERATION_ACTION = 'MODERATION_ACTION',
}

export enum WsEvent {
  NEW_MESSAGE = 'new_message',
  MESSAGE_READ = 'message_read',
  LISTING_STATUS_CHANGED = 'listing_status_changed',
  USER_TYPING = 'user_typing',
  NOTIFICATION = 'notification',
}
