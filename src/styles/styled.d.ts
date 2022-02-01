import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primary100: string;
      primary300: string;
      gray1: string;
      gray2: string;
      warning: string;
      error: string;
      success: string;
      overlay: string;
    };
  }
}
