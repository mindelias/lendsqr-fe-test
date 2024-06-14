import React from "react";
import type { FormProps } from "antd";
import { Button,  Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);

  localStorage.setItem("lendsqr-auth", "true");
  window.location.href = "/users";
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => {

    const navigate = useNavigate();
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Form.Item<FieldType> name="email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item<FieldType> name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <p className="text-secondary text-left" onClick={() => navigate("/forgot-password")}>
          {" "}
          Forgot password?{" "}
        </p>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" style={{ width: "100%" }}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
