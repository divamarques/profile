import {createGlobalStyle} from 'styled-components';

export const GlobaStyle = createGlobalStyle`

:root {
  --background: #2F303A;
  --light-green: #ABDB25;
  --light-title: #CCCCCC;
  --dark-title: #999999;
  --dark-grey: #666666;
  --white: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (min-width: 1440px) {
    font-size: 93.75%;//15px//
  }
  @media (min-width: 720px) {
    font-size: 87.5%;//14px

  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`;

