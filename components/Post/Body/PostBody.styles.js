import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const StyledContent = styled.div`
  font-size: 1.25rem;
  line-height: 1.7;
  ${getGlobalTransition()}
  overflow: auto;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.875rem;
    line-height: 1.375;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.375;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;
    margin-bottom: 1.5em;

    li {
      padding: 0.5em 0;
    }
  }

  a {
    color: ${({ theme }) => theme.primary};
    font-weight: 900;
    font-size: 19px;
    cursor: pointer;

    img {
      margin: 0 auto;
    }
  }

  p {
    margin-bottom: 1.5em;
  }

  pre,
  code {
    margin: 1rem 0;
    border-radius: 0.5rem;
    overflow-x: auto;
    word-wrap: break-word;
  }

  code {
    color: #6da34dff;
    background-color: #282c34;
    padding: 0.2em 0.5em;
    font-size: 1rem;
  }

  pre > code {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: ${({ theme }) => theme.code.background};
    color: ${({ theme }) => theme.code.color};
    ${getGlobalTransition()}
  }

  .hljs-comment,
  .hljs-quote {
    color: ${({ theme }) => theme.code.comment};
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: ${({ theme }) => theme.code.keyword};
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: ${({ theme }) => theme.code.name};
    font-weight: 900;
  }

  .hljs-literal {
    color: ${({ theme }) => theme.code.literal};
    font-weight: 900;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: ${({ theme }) => theme.code.regexp};
    font-weight: 900;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: ${({ theme }) => theme.code.class};
    font-weight: 900;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: ${({ theme }) => theme.code.variable};
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: ${({ theme }) => theme.code.link};
    font-weight: 900;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: 900;
  }

  .hljs-link {
    text-decoration: underline;
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

export const Figure = styled.figure`
  figcaption {
    font-size: 16px;
    text-align: center;
  }
`
