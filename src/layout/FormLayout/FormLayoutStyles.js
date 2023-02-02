export const mainContainer = {
  width: `100vw`,
  height: `100vh`,
  display: `grid`,
  gridTemplateAreas: `
    header
    content
    footer
  `,
  gridTemplateColumns: `1fr`,
  gridTemplateRows: `auto 1fr auto`,
};

export const header = {
  area: `header`,
};

export const content = {
  area: `content`,
};

export const footer = {
  area: `footer`,
};
