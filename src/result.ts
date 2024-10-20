export type Result<T, E> =
  | { kind: 'Ok'; value: T }
  | { kind: 'Err'; error: E };

export const ok = <T>(value: T): Result<T, never> => ({
  kind: 'Ok',
  value,
});

export const err = <E>(error: E): Result<never, E> => ({
  kind: 'Err',
  error,
});

function* pick<T, E>(option: Result<T, E>) {
  return (yield option) as T;
}

export const match = <T, E, R>(result: Result<T, E>, onOk: (value: T) => R, onError: (e: E) => R) => {
  if (result.kind === "Ok") {
    return onOk(result.value);
  } else {
    return onError(result.error);
  }
}

export function resultG<T, E>(
  gen: (_: <T1, E1>(result: Result<T1, E1>) => Generator<any, T1, T1>) => Generator<any, T, never>): Result<T, E> {
  const g: Generator<any, any, any> = gen((v) => pick(v));
  let r = g.next();
  let o: any;

  while (!r.done) {
    o = r.value;
    const [c, a] = match(o, (s) => [true, s] as [boolean, any], () => [false, null] as [boolean, any]);
    if (!c) {
      return o;
    }
    r = g.next(a);
  }

  return ok(r.value);

}