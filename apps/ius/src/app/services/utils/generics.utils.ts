export function GenClassFactory<Props>(): new () => Props {
  return class {} as any;
}
