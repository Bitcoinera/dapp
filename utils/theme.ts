import { extendTheme } from '@chakra-ui/react';
import { css } from '@emotion/react';

const Input = {
  variants: {
    outline: {
      field: {
        _focus: {
          borderColor: 'transparent',
          boxShadow: '0px 0px 0px 2px #AD90FF',
        },
      },
    },
  },
};

const Button = {
  baseStyle: { borderRadius: 'full' },
};

const Form = {
  baseStyle: { container: { padding: '2px' } },
};

export const theme = extendTheme({
  breakpoints: {
    '3xl': '108em',
    '2xl': '96em',
    base: '0em',
    lg: '62em',
    md: '48em',
    sm: '30em',
    xl: '80em',
  },
  sizes: {
    '9xl': '108rem',
    '10xl': '120em',
  },
  fonts: {
    heading: `'Museo Moderno', sans-serif`,
    headingLight: `'Museo Moderno Light', sans-serif`,
    // body: `'Baumans Regular', sans-serif`,
  },
  colors: {
    main: '#2DF8C7',
    ['main.100']: '#2DF8C710',
    ['main.200']: '#2DF8C720',
    ['main.300']: '#2DF8C730',
    ['main.400']: '#2DF8C740',
    ['main.500']: '#2DF8C750',
    ['main.600']: '#2DF8C760',
    ['main.700']: '#2DF8C770',
    ['main.800']: '#2DF8C780',
    ['main.900']: '#2DF8C790',
    ['main.950']: '#2DF8C795',
    pending: '#EFFF8F',
    ['pending.100']: '#EFFF8F10',
    ['pending.200']: '#EFFF8F20',
    ['pending.300']: '#EFFF8F30',
    ['pending.400']: '#EFFF8F40',
    ['pending.500']: '#EFFF8F50',
    ['pending.600']: '#EFFF8F60',
    ['pending.700']: '#EFFF8F70',
    ['pending.800']: '#EFFF8F80',
    ['pending.900']: '#EFFF8F90',
    ['pending.950']: '#EFFF8F95',
    rejected: '#FD86FF',
    ['rejected.100']: '#FD86FF10',
    ['rejected.200']: '#FD86FF20',
    ['rejected.300']: '#FD86FF30',
    ['rejected.400']: '#FD86FF40',
    ['rejected.500']: '#FD86FF50',
    ['rejected.600']: '#FD86FF60',
    ['rejected.700']: '#FD86FF70',
    ['rejected.800']: '#FD86FF80',
    ['rejected.900']: '#FD86FF90',
    ['rejected.950']: '#FD86FF95',
    neutral: '#BCBCBC',
  },
  shadows: {
    outline: '0px 0px 0px 2px #AD90FF',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    Input,
    Button,
    Form,
  },
});

export const globalStyles = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #444444;
    border-radius: 2.5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #2df8c7;
    border-radius: 2.5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1f7165;
  }
  body {
    scrollbar-color: #2df8c7 #444444;
    ::-webkit-scrollbar-track {
      background: #444444;
      border-radius: 0px;
    }
    overflow-y: scroll;
    background: #111312;
    overflow-x: hidden;
  }
  html,
  #__next {
    height: 100%;
  }
`;
