import React from "react";
import { Button, Col, Row } from "antd";
import Logo from "../../assets/images/logo.svg";
import DecorImage from "../../assets/images/decor-sign-in.svg";
import LoginForm from "../../components/Login/LoginForm";
import "./login.scss";

const Login = () => {
  

  return (
    <div className="login-container">
      <Row>
        <Col  md={12} xs={0} className="left-col">
          <div className="logo-wrapper">
            <img src={Logo} alt="login" className="logo-img" />
          </div>
          <div className="decor-image-container">
            <img src={DecorImage} alt="" />
          </div>
        </Col>
        <Col md={12} className="right-col" >

          <Row align="middle" justify={"center"} className="inner-row">
            <Col span={24} lg={16} md={20} xs={24}>
              <h1 className="welcome-title mb-lg">Welcome !</h1>
            </Col>
            <Col span={24} lg={16} md={20} xs={24} className="mb-lg" >
              <p className="app-paragraph text-left mb-lg">Enter details to login.</p>
            </Col>

            <Col span={24} lg={16}   xs={24}>
              <LoginForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
