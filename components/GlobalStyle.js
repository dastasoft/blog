import { createGlobalStyle } from 'styled-components'

export const colorBackgroundAndTransition = ({
  background,
  contentText,
}) => `background-color: ${background};
  color: ${contentText};
  ${getGlobalTransition()}`

export const imageDarkModeSupport = color => `
img {
  filter: ${color === 'white' ? 'invert()' : 'none'};
}
`

export const getGlobalTransition = () => 'transition: all 0.5s linear;'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    ${getGlobalTransition()}
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    ${getGlobalTransition()}

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => `${theme.thumbBG} transparent`};

    h2 {
      font-weight: 700;
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
    /* max-width: ${({ theme }) => theme.breakpoints.mobile}; */
    margin: 0 auto;
    overflow-y: auto;
  }
`

export default GlobalStyle
