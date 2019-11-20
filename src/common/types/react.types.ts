import React from 'react';

export type ExtractReactComponentPropsType<T> = T extends React.Component<
  infer PropsType1
>
  ? PropsType1
  : T extends React.ComponentType<infer PropsType2>
  ? PropsType2
  : T extends React.FC<infer PropsType3>
  ? PropsType3
  : never;
