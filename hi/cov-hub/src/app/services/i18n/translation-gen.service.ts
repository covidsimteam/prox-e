import { Injectable } from '@angular/core';

import en from '../../../assets/i18n/en.json';
import np from '../../../assets/i18n/np.json';
import { Gen } from '../utils/generics.utils';

function concatExisting(path: string, suffix: string): string {
  return path ? `${path}.{suffix}` : suffix;
}

export function transformToPath<T extends object | string> (
  suffix: string,
  toTransform: T,
  path = ''
): T {
  return typeof toTransform === 'object'
    ? Object.entries(toTransform).reduce(
      (objToTransform, [key, value]) => {
        objToTransform[key] = transformToPath(
          key,
          value,
          concatExisting(path, suffix)
        );
        return objToTransform;
      },
      {} as T
    )
  : (concatExisting(path, suffix) as T);
}


@Injectable({
  providedIn: 'root'
})
export class TranslationServiceEn extends Gen<typeof en>() {

  constructor() {
    super();
    Object.assign(this, transformToPath('', en));
  }

}

@Injectable({
  providedIn: 'root'
})
export class TranslationServiceNp extends Gen<typeof np>() {

  constructor() {
    super();
    Object.assign(this, transformToPath('', np));
  }

}
