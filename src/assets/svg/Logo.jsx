import * as React from "react";

function LogoComponent(props) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo.png`}
      alt="Logo"
      width={170}
      height={75}
      {...props}
    />
  );
}

export default LogoComponent;
