import { option, toValue, map, none, some } from "./option";
import { pipe } from "./pipe";
import { resultG, ok, err, Result } from "./result";

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


function div2(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return err<string>("division by zero");
  }
  return ok(a / b);
}

const result2 = resultG(function* (_) {
  let a = yield* _(ok(6));
  let b = yield* _(ok(0));
  let c = yield* _(div2(a, b));
  return c.toFixed(2);
});



