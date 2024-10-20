type Fn<In, Out> = (input: In) => Out;

export function pipe<A, B>(input: A, f1: Fn<A, B>): B;
export function pipe<A, B, C>(input: A, f1: Fn<A, B>, f2: Fn<B, C>): C;
export function pipe<A, B, C, D>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>): D;
export function pipe<A, B, C, D, E>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>): E;
export function pipe<A, B, C, D, E, F>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>): F;
export function pipe<A, B, C, D, E, F, G>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>): G;
export function pipe<A, B, C, D, E, F, G, H>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>): H;
export function pipe<A, B, C, D, E, F, G, H, I>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>): I;
export function pipe<A, B, C, D, E, F, G, H, I, J>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>): J;
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>): K;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>): L;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>): M;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>): N;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>): O;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>): P;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>, f16: Fn<P, Q>): Q;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>, f16: Fn<P, Q>, f17: Fn<Q, R>): R;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>, f16: Fn<P, Q>, f17: Fn<Q, R>, f18: Fn<R, S>): S;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>, f16: Fn<P, Q>, f17: Fn<Q, R>, f18: Fn<R, S>, f19: Fn<S, T>): T;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>, f16: Fn<P, Q>, f17: Fn<Q, R>, f18: Fn<R, S>, f19: Fn<S, T>, f20: Fn<T, U>): U;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>, f16: Fn<P, Q>, f17: Fn<Q, R>, f18: Fn<R, S>, f19: Fn<S, T>, f20: Fn<T, U>, f21: Fn<U, V>): V;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(input: A, f1: Fn<A, B>, f2: Fn<B, C>, f3: Fn<C, D>, f4: Fn<D, E>, f5: Fn<E, F>, f6: Fn<F, G>, f7: Fn<G, H>, f8: Fn<H, I>, f9: Fn<I, J>, f10: Fn<J, K>, f11: Fn<K, L>, f12: Fn<L, M>, f13: Fn<M, N>, f14: Fn<N, O>, f15: Fn<O, P>, f16: Fn<P, Q>, f17: Fn<Q, R>, f18: Fn<R, S>, f19: Fn<S, T>, f20: Fn<T, U>, f21: Fn<U, V>, f22: Fn<V, W>): W;

/**
 * Flattens an array of functions into a single function.
 * @example
 * const res = pipe(1,
 *  (n) => n.toFixed(2),
 *  (x) => 1,
 *  (x) => x + 1,
 *  (x) => new Date(),
 *  (x) => x.toISOString(),
 *  a => a.length
 * );
 */
export function pipe(...args: any[]): any {
  const [input, ...fns] = args;
  return fns.reduce((acc, fn) => fn(acc), input);
}

