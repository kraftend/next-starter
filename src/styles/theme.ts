import { extendTheme, ThemeConfig, Theme, DeepPartial } from '@chakra-ui/react';
import 'focus-visible';

const theme: DeepPartial<Theme> & DeepPartial<ThemeConfig> = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: 'InterVariable, system-ui, sans-serif',
    heading: 'InterVariable, system-ui, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden',
      },
      '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
        boxShadow: 'none',
      },
    },
  },
};

export default extendTheme(theme);
