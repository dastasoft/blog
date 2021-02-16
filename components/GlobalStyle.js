import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all 0.50s linear;

    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 1.375;
    }

    a {
      text-decoration: none;
    }
  }
`

export const colorBackgroundAndTransition = ({
  background,
  contentText,
}) => `background-color: ${background};
  color: ${contentText};
  transition: all 0.5s linear;`

export const imageDarkModeSupport = (color) => `
img {
  filter: ${color === 'white' ? 'invert()' : ''};
}
`

export default GlobalStyle
