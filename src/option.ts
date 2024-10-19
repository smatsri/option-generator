export type Option<T> = { kind: "some"; value: T } | { kind: "none" };

export const some = <T>(value: T): Option<T> => ({ kind: "some", value });

export const none = <T>(): Option<T> => ({ kind: "none" });

export const isSome = <T>(option: Option<T>): option is { kind: "some"; value: T } =>
  option.kind === "some";

export const isNone = <T>(option: Option<T>): option is { kind: "none" } =>
  option.kind === "none";

export const toValue = <T>(option: Option<T>, defaultValue: T): T => {
  if (option.kind === "some") {
    return option.value;
  } else {
    return defaultValue;
  }
};

export const bind = <T, U>(
  option: Option<T>,
  f: (value: T) => Option<U>
): Option<U> => {
  if (option.kind === "some") {
    return f(option.value);
  } else {
    return none<U>();
  }
};

export const map = <T, U>(option: Option<T>, f: (value: T) => U): Option<U> => {
  if (option.kind === "some") {
    return some(f(option.value));
  } else {
    return none<U>();
  }
};


const match = <T>(option: Option<T>, onSome: (value: T) => T, onNone: () => T) => {
  if (option.kind === "some") {
    return onSome(option.value);
  } else {
    return onNone();
  }
}

export function* pick<A>(option: Option<A>) {
  return (yield option) as A;
}

export function option<A>(gen: (_: <T>(_: Option<T>) => Generator<any, T, T>) => Generator<any, A, never>): Option<A> {
  const g: Generator<any, any, any> = gen((v) => pick(v));
  let r = g.next();
  let o: any;

  while (!r.done) {
    o = r.value;
    const [c, a] = match(o, (a) => ([true, a]), () => ([false, null as any]));
    if (!c) {
      break;
    }
    r = g.next(a);
  }

  return o;

}





