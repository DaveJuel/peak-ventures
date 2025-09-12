import React from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import { FormField } from "../../style/view.styles";

const PhoneField = ({ value, onChange, disabled, label = "Phone" }) => {
  return (
    <FormField style={{ width: "96%" }}>
      <label>{label}</label>
      <StyledPhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="RW"
        flags={flags}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          border: "1px solid rgb(204, 204, 204)",
          "border-radius": "5px",
        }}
      />
    </FormField>
  );
};

const StyledPhoneInput = styled(PhoneInput)`
  /* Container */
  .PhoneInput {
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid rgb(204, 204, 204);
  }

  /* Country select */
  .PhoneInputCountry {
    padding: 0 10px;
    border-right: 1px solid #ccc;
    display: flex;
    align-items: center;
  }

  /* Flag */
  .PhoneInputCountryIcon {
    margin-right: 8px;
  }

  /* Input field */
  .PhoneInputInput {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    width: auto;
  }

  /* Apply disabled styles */
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.7;
    .PhoneInputCountry {
      cursor: not-allowed;
    }
    .PhoneInputInput {
      background-color: #f9f9f9;
    }
  `}
`;

export default PhoneField;
