export { };
type Fn<In, Out> = (input: In) => Out;
type Ret<T> =
  T extends []
  ? never
  : T extends [Fn<infer A, infer B>]
  ? Fn<A, B>
  : T extends [Fn<infer A, infer B>, infer F]
  ? F extends Fn<B, infer C>
  ? Fn<A, C>
  : never
  : T extends [Fn<infer A, infer B>, Fn<infer B, infer C>, ...infer F3]
  ? Ret<[Fn<A, C>, ...F3]>
  : never


function pipe<T extends any[]>(...fns: T): Ret<T> {
  throw new Error("Function not implemented.");
}

const p = pipe(
  (x: "a") => "b",
  (x: "b") => "c",
  (x: "c") => "d",
  (x: "d") => "e");

const r = p("a");