import * as React from "react";

function LogoComponent(props) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo.svg`}
      alt="Logo"
      width={170}
      height={70}
      {...props}
    />
  );
}

export default LogoComponent;
