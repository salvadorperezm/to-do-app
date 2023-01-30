export const container = {
  height: `100%`,
  background: `rgb(2,0,36)`,
  background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
};

export const formContainer = {
  backgroundColor: `white`,
  px: { base: `10px`, md: `20px` },
  py: `20px`,
  maxWidth: `500px`,
  boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
  borderRadius: { base: `5px`, md: `5px` },
  flex: `1`,
  mx: { base: `10px`, md: `0px` },
};

export const titleContainer = {
  borderBottom: `1px solid grey`,
  pb: `20px`,
  mb: `20px`,
};

export const titleText = {
  fontWeight: `bold`,
  fontSize: `2rem`,
  textAlign: `center`,
};

export const registerText = {
  color: `main`,
  _hover: {
    textDecoration: `underline`,
  },
  textAlign: `center`,
};

export const loginButton = {
  width: `100%`,
  my: `15px`,
  backgroundColor: `main`,
  color: `white`,
  _hover: {
    backgroundColor: `main`,
    color: `white`,
  },
};

export const inputContainer = {
  mb: `15px`,
};
