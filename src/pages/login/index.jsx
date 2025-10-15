import { Button, Form, Input, Card, Typography, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQueryHandler } from "../../hooks/useQueryHandler";

const { Title, Text } = Typography;

function Login() {
  const navigate = useNavigate();

  const { data, isLoading, } = useQueryHandler({
    pathname: "user",
    url: "user",
  });

  const login = (values) => {
    const { username, password } = values;

    const found = data?.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      localStorage.setItem("user", JSON.stringify(found));
      message.success("Tizimga muvaffaqiyatli kirildi 🎉");
      navigate("/dashboard");
    } else {
      console.log("hatolik");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Card className="w-[380px] shadow-lg rounded-2xl p-6 bg-white">
        <div className="text-center mb-6">
          <Title level={3} className="!mb-1 text-[#f42c37]">
            Login
          </Title>
          <Text type="secondary">Hisobingizga kiring</Text>
        </div>

        <Form layout="vertical" onFinish={login}>
          <Form.Item
            label={<span className="font-medium text-gray-700">Username</span>}
            name="username"
            rules={[{ required: true, message: "Username kiriting" }]}
          >
            <Input
              placeholder="Foydalanuvchi nomi"
              className="rounded-lg py-2 border-gray-300 focus:border-[#f42c37] focus:ring-[#f42c37]"
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-gray-700">Password</span>}
            name="password"
            rules={[{ required: true, message: "Parol kiriting" }]}
          >
            <Input.Password
              placeholder="Parolingiz"
              className="rounded-lg py-2 border-gray-300 focus:border-[#f42c37] focus:ring-[#f42c37]"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            block
            className="bg-[#f42c37] hover:bg-[#d7252e] mt-2 rounded-lg py-2 font-medium"
          >
            Kirish
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
