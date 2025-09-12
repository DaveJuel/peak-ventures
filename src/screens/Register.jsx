import React, { useState } from "react";
import FullButton from "../components/Buttons/FullButton";
import {
  Container,
  Form,
  FormWrapper,
  Input,
  Message,
  PageWrapper,
  Wrapper,
} from "../style/view.styles";
import { PasswordInput } from "../components/Inputs/PasswordInput";
import GoogleSSOButton from "../components/Buttons/GoogleSSOButton";
import { useNavigate } from "react-router-dom";
import { makeApiRequest } from "../utils/RequestHandler";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const appUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${appUrl}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          username: email,
          password,
          confirm_password: confirmPassword
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Registration successful! Redirecting...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(data.result || "An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuthSuccess = async (response) => {
    const { credential } = response;
    try {
      setLoading(true);
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await makeApiRequest("/google/sso/register/", "POST", {
        token: credential,
        api_key: apiKey,
      });
      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.result));
        navigate("/my-profile");
      } else {
        setMessage(response.result || "Registration failed");
      }
    } catch (error) {
      setMessage(error.message ?? "An error occurred during registration");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Wrapper className="paleBlueGreyBg">
        <Container>
          <PageWrapper className="container flexCenter">
            <FormWrapper>
              <h1 className="extraBold font40 darkGreenColor">Register Here</h1>
              <Form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <PasswordInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />

                <PasswordInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <FullButton title={loading ? "Registering..." : "Register"} />
                <GoogleSSOButton
                  onSuccess={handleGoogleAuthSuccess}
                  authType="register"
                />
              </Form>
              {message && <Message className="font13">{message}</Message>}
              <Message className="font13">
                Already have an account? <a href="/login">Login here</a>
              </Message>
            </FormWrapper>
          </PageWrapper>
        </Container>
      </Wrapper>
    </>
  );
}