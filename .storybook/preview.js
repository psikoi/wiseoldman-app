import GlobalStyle from '../src/styles/global';

export const decorators = [
  Story => (
    <>
      <Story />
      <GlobalStyle />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
