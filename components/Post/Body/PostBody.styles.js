import styled from 'styled-components'

export const StyledContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.625;
  transition: all 0.5s linear;
  overflow: auto;
  margin-bottom: 10rem;

  h2 {
    font-size: 1.875rem;
    line-height: 1.375;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.375;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;
    li {
      padding: 0.3rem 0;
    }
  }

  a {
    color: ${({ theme }) => theme.primary};
    font-weight: 800;
    text-decoration: underline;
    cursor: pointer;
    img {
      margin: 0 auto;
    }
  }

  pre,
  code {
    margin: 1rem 0;
    border-radius: 0.5rem;
    overflow-x: auto;
    word-wrap: break-word;
  }

  .table-wrapper-paragraph {
    width: 100%;
    font-size: 1em;
    display: flex;
    justify-content: center;
    overflow-x: auto;

    table {
      margin: 0.8em auto 1.2em;
      table-layout: fixed;
    }

    th {
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: #eef0f1;
      padding: 0.4rem 1rem;
      text-align: center;
    }

    td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.4rem 1rem;
      text-align: center;
    }
  }

  .highlight {
    overflow-x: auto;
  }

  .highlight__panel {
    display: none;
  }

  @media (max-width: 1000px) {
    .table-wrapper-paragraph {
      table {
        display: flex;
      }

      tr {
        display: flex;
        flex-direction: column;
      }
    }
  }
`
