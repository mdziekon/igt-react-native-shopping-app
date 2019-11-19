import React from 'react';

export type ExtractReactFCPropsType<T> = T extends React.FC<infer PropsType>
  ? PropsType
  : never;

export type ExtractReactComponentPropsType<T> = T extends React.Component<
  infer PropsType
>
  ? PropsType
  : never;
