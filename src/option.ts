export type Option<T> = { kind: "some"; value: T } | { kind: "none" };

export const some = <T>(value: T): Option<T> => ({ kind: "some", value });

export const none = <T>(): Option<T> => ({ kind: "none" });

export const isSome = <T>(option: Option<T>): option is { kind: "some"; value: T } =>
  option.kind === "some";

export const isNone = <T>(option: Option<T>): option is { kind: "none" } =>
  option.kind === "none";

export function toValue<T>(defaultValue: T, option: Option<T>): T;
export function toValue<T>(defaultValue: T): (option: Option<T>) => T;
export function toValue<T>(defaultValue: T, option?: Option<T>): T | ((option: Option<T>) => T) {
  if (option) {
    // If option is provided, return the value or default
    return option.kind === "some" ? option.value : defaultValue;
  } else {
    // If only the default value is provided, return a function that takes an option
    return (option: Option<T>) => {
      return option.kind === "some" ? option.value : defaultValue;
    };
  }
}

export const bind = <T, U>(
  f: (value: T) => Option<U>,
  option: Option<T>,
): Option<U> => {
  if (option.kind === "some") {
    return f(option.value);
  } else {
    return none<U>();
  }
};

export function map<T, U>(f: (value: T) => U, option: Option<T>): Option<U>;
export function map<T, U>(f: (value: T) => U): (option: Option<T>) => Option<U>;
export function map<T, U>(f: (value: T) => U, option?: Option<T>): Option<U> | ((option: Option<T>) => Option<U>) {
  if (option) {
    // If option is provided, apply the function directly
    if (option.kind === "some") {
      return some(f(option.value));
    } else {
      return none<U>();
    }
  } else {
    // If only the function is provided, return a function that accepts an option
    return (option: Option<T>) => {
      if (option.kind === "some") {
        return some(f(option.value));
      } else {
        return none<U>();
      }
    };
  }
}


const match = <T>(option: Option<T>, onSome: (value: T) => T, onNone: () => T) => {
  if (option.kind === "some") {
    return onSome(option.value);
  } else {
    return onNone();
  }
}

function* pick<A>(option: Option<A>) {
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
      return o;
    }
    r = g.next(a);
  }

  return some(r.value);

}





