import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const StyledContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.625;
  ${getGlobalTransition()}
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
    font-size: 19px;
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

  pre {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: ${({ theme }) => theme.code.background};
    color: ${({ theme }) => theme.code.color};
    font-size: 20px;
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
    font-weight: bold;
  }

  .hljs-literal {
    color: ${({ theme }) => theme.code.literal};
    font-weight: bold;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: ${({ theme }) => theme.code.regexp};
    font-weight: bold;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: ${({ theme }) => theme.code.class};
    font-weight: bold;
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
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  /* pre {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #eaeef3;
    color: #00193a;
    font-size: 20px;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-title,
  .hljs-section,
  .hljs-doctag,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-comment {
    color: #738191;
  }

  .hljs-string,
  .hljs-title,
  .hljs-section,
  .hljs-built_in,
  .hljs-literal,
  .hljs-type,
  .hljs-addition,
  .hljs-tag,
  .hljs-quote,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #0048ab;
  }

  .hljs-meta,
  .hljs-subst,
  .hljs-symbol,
  .hljs-regexp,
  .hljs-attribute,
  .hljs-deletion,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-link,
  .hljs-bullet {
    color: #4c81c9;
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  } */

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
