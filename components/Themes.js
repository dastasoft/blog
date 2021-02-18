const theme = {
  primary: '#6da34dff',
  secondary: '#8fbc94ff',
  thumbBG: '#6da34dff',
  breakpoints: {
    mobile: '475px',
  },
}

export const lightTheme = {
  body: 'white',
  UIText: 'white',
  contentText: 'black',
  background: 'white',
  code: 'black',
  ...theme,
}
export const darkTheme = {
  body: 'black',
  UIText: 'black',
  contentText: 'white',
  background: 'black',
  code: 'white',
  ...theme,
}
