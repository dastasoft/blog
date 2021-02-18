import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.5s linear;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all 0.5s linear;

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => `${theme.thumbBG} transparent`};

    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 1.375;
    }
  }

  body::-webkit-scrollbar {
    width: 0.75rem;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.thumbBG};
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.body};
  }

  button, button:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  .mobile-locked {
    max-width: ${({ theme }) => theme.breakpoints.mobile};
    margin: 0 auto;
    overflow-y: auto;
  }
`

export const colorBackgroundAndTransition = ({
  background,
  contentText,
}) => `background-color: ${background};
  color: ${contentText};
  transition: all 0.5s linear;`

export const imageDarkModeSupport = color => `
img {
  filter: ${color === 'white' ? 'invert()' : ''};
}
`

export default GlobalStyle
