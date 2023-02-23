import styled from 'styled-components'

export default function BuyMeACoffeeButton() {
  return (
    <CoffeeButton target="_blank" href="https://www.buymeacoffee.com/dastasoft">
      🍣 Support me by buying me a plate of sushi
    </CoffeeButton>
  )
}

const CoffeeButton = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.UIText};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.contrast};
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  font-weight: bold;
  font-size: 1.5rem;

  :hover,
  :active,
  :focus {
    text-decoration: underline;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: ${({ theme }) => theme.UIText};
  }
`
