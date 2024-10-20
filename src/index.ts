import { option, toValue, map, none, some, bind } from "./option";
import { pipe } from "./pipe";


const result = option(function* (_) {
  let d = yield* _(some(1));
  let a = yield* _(some(1));
  let b = yield* _(some("123"));
  //let c = yield* _(none<string>());
  return b;
});

const optionValue =
  pipe(
    result,
    map((v) => `option value: ${v}`),
    toValue("no option value"),
  )

console.log(optionValue);



