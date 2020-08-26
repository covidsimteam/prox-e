export function Gen<Props>(): new () => Props {
  return class {} as any;
}
