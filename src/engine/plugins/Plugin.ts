import { ComponentType } from "react";

export interface Plugin<TProps> {
  type: string;
  Component: ComponentType<TProps>;
  defaultProps: TProps;
  validate(props: TProps): boolean;
}