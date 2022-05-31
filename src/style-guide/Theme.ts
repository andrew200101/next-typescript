import { createGlobalStyle } from 'styled-components';
import { Color } from './Color';
import { size } from './Device';
import {
  Font,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
  TextStyle,
} from './Typography';

export const theme: any = {
  space: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 84, 96],
  radii: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 84, 96],
  size: {
    ...size,
  },
  fonts: Font.roboto,
  fontSizes: {
    ...FontSize,
  },
  fontWeights: {
    ...FontWeight,
  },
  lineHeights: {
    ...LineHeight,
  },

  letterSpacings: {
    ...LetterSpacing,
  },
  colors: {
    ...Color,
  },
  textStyles: { ...TextStyle },
  xt: {},
};

export const GlobalStyle = createGlobalStyle`


    // this is the shared style
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0
  }

  *,
  *::before,
  *::after {
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-family: Inter, sans-serif;
    box-sizing: inherit;

  }
`;
