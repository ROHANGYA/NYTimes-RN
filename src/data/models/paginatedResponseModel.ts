export interface PaginatedResponseModel<T> {
  docs: T[] | null;
  metadata: Metadata;
}

export interface Metadata {
  hits: number;
  offset: number;
  time: number;
}
