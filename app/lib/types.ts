import { FC } from 'react';

export type FCWithClassName<P = {}> = FC<P & { className?: string }>;

export type InferAwaitedReturn<T extends (...args: any[]) => any> = Awaited<ReturnType<T>>;
