export type ProvinceStdName =
  | 'Province 1'
  | 'Province 2'
  | 'Bagmati'
  | 'Gandaki'
  | 'Province 5'
  | 'Karnali'
  | 'Sudurpashchim';

export interface Province {
  commonNames: string[];
  standardName: ProvinceStdName;
}
