import { Action } from 'redux';

interface ActionWithPayload<T, PayloadType> extends Action<T> {
  payload: PayloadType;
}

type ActionCreatorsMap = Record<string, (...args: any[]) => any>;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return { type, ...(payload ? { payload } : {}) };
}

export type GenerateActionsUnion<A extends ActionCreatorsMap> = ReturnType<
  A[keyof A]
>;
