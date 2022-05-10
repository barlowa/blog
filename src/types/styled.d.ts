// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      blue: string;
      sky: string;
      babyBlue: string;
      white: string;
    };
    typography: {
      headline: string;
      headlineSmall: string;
      bodyLarge: string;
      body: string;
    };
  }
}
