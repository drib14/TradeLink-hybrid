import { UserRole, AccountStatus, VerificationStatus } from './enums.js';

export interface UserSummary {
  id: string;
  email: string;
  displayName: string;
  profilePhoto: string | null;
  campusId: string;
  campusName: string;
  role: UserRole;
  verificationStatus: VerificationStatus;
  accountStatus: AccountStatus;
  joinedAt: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  displayName: string;
  campusId: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse extends AuthTokens {
  user: UserSummary;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface VerifyEmailRequest {
  token: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}
