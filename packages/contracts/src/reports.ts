import { ReportTargetType } from './enums';

export interface CreateReportRequest {
  targetType: ReportTargetType;
  targetId: string;
  reason: string;
  details?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total?: number;
    hasMore: boolean;
    cursor?: string | null;
    page?: number;
    limit: number;
  };
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
  timestamp: string;
  path: string;
}
