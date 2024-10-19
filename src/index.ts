import { option, toValue } from "./option";

const result = option(function* (some, none) {
  let d = yield* some(1)
  let a = yield* some(1);
  let b = yield* some("123");
  //let c = yield* none<string>();
  return "result " + b;
});

const value = toValue(result, "NA");
console.log(value);



