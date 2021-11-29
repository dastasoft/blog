import styled, { createGlobalStyle } from 'styled-components'

export const colorBackgroundAndTransition = ({
  background,
  contentText,
}) => `background-color: ${background};
  color: ${contentText};
  ${getGlobalTransition()}`

export const imageDarkModeSupport = color => `
img {
  filter: ${color === '#ededee' ? 'invert()' : 'none'};
}
`

export const getGlobalTransition = () => 'transition: all 0.5s linear;'

export const Input = styled.input`
  ${getGlobalTransition()}
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.contentText};
  font-size: 18px;
  max-width: ${({ theme }) => theme.maxWidth};
  outline: none;
  padding: 0.5rem;
  width: inherit;

  :focus {
    outline: none;
  }
`

export const Button = styled.button`
  ${getGlobalTransition()}
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.UIText};
  cursor: pointer;
  background-color: ${({ theme }) => theme.contrast};
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${({ theme }) => theme.primary};
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Spinner = styled.span`
  display: ${({ loading }) => (loading ? 'inline-block' : 'none')};

  :after {
    content: ' ';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    border: 2px solid ${({ theme }) => theme.UIText};
    border-color: ${({ theme }) => theme.UIText} transparent
      ${({ theme }) => theme.UIText} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

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

/* Smooth scrolling IF user doesn't have a preference due to motion sensitivities */
  @media screen and (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
`

export default GlobalStyle
