import React, { useState, useContext, useEffect } from "react";
import { Card, Checkbox, Form, Icon, Input } from "antd";
import { useHistory } from "react-router-dom";
import DefaultAPI from "../api/DefaultAPI";
import { AuthContext } from "../contexts/AuthContext";
import openNotification from "../components/Notification/Notification";

const Login = () => {
  const [mail, setMail] = useState("ahmet.cetin@kns.com.tr");
  const [password, setPassword] = useState("123");
  const [sending, setSending] = useState(false);
  const [validateStatus, setValidateStatus] = useState({
    mail: {
      validateStatus: "",
      help: ""
    },
    password: { validateStatus: "", help: "" }
  });
  const { userData, setUserData } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    if (userData !== null && userData !== "" && userData.mail !== undefined) {
      localStorage.setItem("userData", JSON.stringify(userData));
      history.replace("/");
      openNotification(
        "Hoşgeldin",
        `Merhaba ${userData.name + " " + userData.surname}, bugün nasılsın?`
      );
    }
  }, [userData]);

  const login = async e => {
    e.preventDefault();
    setSending(true);
    const { data } = await DefaultAPI("/login", "POST", { mail, password });
    console.log(data);
    if (data.data === null || data.error) {
      setValidateStatus({
        mail: {
          validateStatus: "warning",
          help: "Mail adresinizi kontrol edin"
        },
        password: { validateStatus: "warning", help: "Şifrenizi kontrol edin" }
      });
    } else {
      setUserData({ ...data.data });
    }
    setSending(false);
  };

  return (
    <div className="LoginContainer">
      <Card title="Giriş Yapın" bordered={false} style={{ width: 400 }}>
        <Form className="login-form" onSubmit={login.bind(this)}>
          <Form.Item
            hasFeedback
            validateStatus={validateStatus.mail.validateStatus}
            help={validateStatus.mail.help}
          >
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="mail"
              onChange={e => setMail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            validateStatus={validateStatus.password.validateStatus}
            help={validateStatus.password.help}
          >
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="/login">
              Forgot password
            </a>
            <Input
              className="login-form-button"
              type="submit"
              value={sending ? "sending" : "Giriş"}
            />
            Or <a href="/login">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
