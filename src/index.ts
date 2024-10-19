import { option, toValue, map, none, some } from "./option";

const result = option(function* (_) {
  let d = yield* _(some(1));
  let a = yield* _(some(1));
  let b = yield* _(some("123"));
  let c = yield* _(none<string>());
  return "result " + b;
});

const value = toValue(map(result, (x) => `result: ${x}`), "no result");
console.log(value);



