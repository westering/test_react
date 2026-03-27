import { Global, css } from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        font-family:
          'Manrope',
          'Segoe UI',
          sans-serif;
        color: #0f172a;
        background-color: #f8fafc;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        margin: 0;
        min-height: 100%;
      }

      body {
        min-width: 320px;
      }

      button,
      input {
        font: inherit;
      }

      img {
        display: block;
        max-width: 100%;
      }
    `}
  />
)
