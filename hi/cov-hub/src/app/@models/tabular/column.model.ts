export interface Column {
  [key: string]: ColumnDetails;
}

export interface ColumnDetails {
  type: string;
  title: string;
}
