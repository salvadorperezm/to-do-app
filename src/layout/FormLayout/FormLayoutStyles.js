export const mainContainer = {
  width: `100vw`,
  height: `100vh`,
  display: `grid`,
  gridTemplateAreas: `
    content
    footer
  `,
  gridTemplateColumns: `1fr`,
  gridTemplateRows: `1fr auto`,
};

export const content = {
  area: `content`,
  border: `1px solid red`,
};

export const footer = {
  area: `footer`,
};
