export const container = {
  minHeight: `100%`,
  background: `rgb(2,0,36)`,
  background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
};

export const contentContainer = {
  flex: `1`,
  backgroundColor: `white`,
  px: { base: `10px`, md: `20px` },
  py: `20px`,
  boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
  borderRadius: { base: `5px`, md: `5px` },
  mx: { base: `10px`, md: `0px` },
  maxWidth: `500px`,
};

export const headerTitle = {
  borderBottom: `1px solid grey`,
  pb: `20px`,
  mb: `20px`,
};

export const headerText = {
  fontWeight: `bold`,
  fontSize: `2rem`,
  textAlign: `center`,
};

export const formContainer = {
  display: `flex`,
  alignItems: `center`,
  gap: `10px`,
  mb: `20px`,
};

export const tasksContainer = {
  height: `250px`,
  overflowX: `scroll`,
};

export const noTasksContainer = {
  height: `250px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
};

export const noTasksText = {
  fontSize: `20px`,
};

export const addTaskButton = {
  backgroundColor: `main`,
  color: `white`,
  _hover: {
    backgroundColor: `main`,
    color: `white`,
  },
};
