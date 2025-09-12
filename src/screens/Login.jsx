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
import { getLoggedInProfile, loginUser } from "../utils/AuthHandler";
import { PasswordInput } from "../components/Inputs/PasswordInput";
import GoogleSSOButton from "../components/Buttons/GoogleSSOButton";
import { useNavigate } from "react-router-dom";
import { makeApiRequest } from "../utils/RequestHandler";

export default function Login() {
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

  const handleGoogleAuthSuccess = async (response) => {
    const { credential } = response;

    try {
      setLoading(true);
      const response = await makeApiRequest("/google/sso/login/", "POST", {
        token: credential,
      });
      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.result));
        const profile = await getLoggedInProfile();
        if (!profile) {
          navigate("/my-profile");
        } else {
          navigate("/home");
        }
      } else {
        setMessage(response.result ?? "An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage(error.message ?? "An error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    setLoading(true);
    setMessage("");
    try {
      const isLoggedIn = await loginUser(email, password);
      if (isLoggedIn) {
        setMessage("Authenticated successfully! Reloading...");
        const profile = await getLoggedInProfile();
        if (!profile) {
          navigate("/my-profile");
        } else {
          navigate("/home");
        }
      } else {
        throw new Error("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setMessage(error.message ?? "Something went wrong. Please try again later.");
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
              <h1 className="extraBold font40 darkGreenColor">Login</h1>
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
                <FullButton title={loading ? "Logging in..." : "Login"} />
                <GoogleSSOButton
                  onSuccess={handleGoogleAuthSuccess}
                  authType="login"
                />
              </Form>
              {message && <Message className="font13">{message}</Message>}
              <Message className="font13">
                Don't have an account? <a href="/register">Register here</a>
              </Message>
            </FormWrapper>
          </PageWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
