import { option, toValue, map, none, some } from "./option";
import { pipe } from "./pipe";

function div(a: number, b: number) {
  if (b === 0) {
    return none<number>();
  }
  return some(a / b);
}

const result = option(function* (_) {
  let a = yield* _(some(6));
  let b = yield* _(some(0));
  let c = yield* _(div(a, b));
  return c;
});

const optionValue =
  pipe(
    result,
    map((v) => `option value: ${v}`),
    toValue("no option value"),
  )

console.log(optionValue);



