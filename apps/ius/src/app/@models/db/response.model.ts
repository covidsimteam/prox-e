export interface DBPostResponse {
  id: string;
  ok: boolean;
  rev: string;
}

interface ErrorResponse {
  status?: number;
  name?: string;
  message?: string;
  reason?: string;
  error?: string | boolean;
  id?: string;
  rev?: string;
}

export type BulkAddResponse = (DBPostResponse | ErrorResponse)[];

export interface DBErrorResponse {
    error: string;
    reason: string;
}
