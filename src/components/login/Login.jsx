import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import ComboLanguage from "../comboLanguage/ComboLanguage";
import useTranslation from "../../custom/useTranslation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();
  const translate = useTranslation();

  const { handleLogin } = useContext(AuthenticationContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const changeEmailHandler = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  };

  const changePasswordHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
        password: false,
      }));
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
        email: false,
      }));
      return;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: false,
      password: false,
    }));
    // alert(`El usuario ingresado es: ${email} y el password es: ${password}`);

    handleLogin(email);
    navigate("/");
  };

  return (
    <Card className="mt-5 mx-3 p-3 px-5 shadow">
      <Card.Body>
        <Row>
          <h5>{translate("welcome")}</h5>
        </Row>
        <ComboLanguage />
        <ToggleTheme />
        <Form onSubmit={submitHandler}>
          <FormGroup className="mb-4">
            <Form.Control
              ref={emailRef}
              type="email"
              className={errors.email ? "border border-danger" : ""}
              onChange={changeEmailHandler}
              placeholder={translate("email")}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Form.Control
              ref={passwordRef}
              type="password"
              value={password}
              className={errors.password ? "border border-danger" : ""}
              onChange={changePasswordHandler}
              placeholder={translate("password")}
            />
          </FormGroup>
          <Row>
            <Col />
            <Col md={6} className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                {translate("login")}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default Login;
