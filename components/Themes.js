const theme = {
  primary: '#6da34dff',
  secondary: '#8fbc94ff',
  thumbBG: '#6da34dff',
  breakpoints: {
    mobile: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}

export const lightTheme = {
  body: 'white',
  UIText: 'white',
  contentText: 'black',
  background: 'white',
  code: {
    color: '#383a42',
    background: '#fafafa',
    comments: '#a0a1a7',
    keyword: '#a626a4',
    name: '#e45649',
    literal: '#0184bb',
    regexp: '#50a14f',
    class: '#c18401',
    variable: '#986801',
    link: '#4078f2',
  },
  ...theme,
}
export const darkTheme = {
  body: 'black',
  UIText: 'black',
  contentText: 'white',
  background: 'black',
  code: {
    color: '#abb2bf',
    background: '#282c34',
    comments: '#5c6370',
    keyword: '#c678dd',
    name: '#e06c75',
    literal: '#56b6c2',
    regexp: '#98c379',
    class: '#e6c07b',
    variable: '#d19a66',
    link: '#61aeee',
  },
  ...theme,
}
