export const container = {
  minHeight: `100vh`,
  minWidth: `100vw`,
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
