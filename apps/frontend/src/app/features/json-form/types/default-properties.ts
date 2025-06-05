import { PrimitiveFieldType } from '@workflow-builder/types/node-schema';

type TypeMap = {
  string: string;
  number: number;
  boolean: boolean;
};

type Convert<T> = T extends PrimitiveFieldType ? TypeMap[T] : unknown;

type ExtractProperties<T> = T extends { properties: infer P }
  ? { [K in keyof P]: Partial<ExtractProperties<P[K]>> }
  : T extends { type: infer X }
    ? Convert<X>
    : T;

export type DefaultProperties<T> = Partial<ExtractProperties<T>>;
