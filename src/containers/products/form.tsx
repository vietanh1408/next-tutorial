import InputPassword from "@/components/form/input-password";
import InputText from "@/components/form/input-text";
import { Button, Card, Form, Input } from "antd";
import React from "react";

interface IProduct {}

const CreateProductForm: React.FC<IProduct> = (props: IProduct) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card className="table-card" bordered={false}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <InputText
          label="username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        />
        <InputPassword
          label="password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        />

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateProductForm;
