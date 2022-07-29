import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";
import React from "react";

interface InputPasswordProps {
  label: string;
  name: string;
  placeholder?: string;
  rules?: Rule[];
  disabled?: boolean;
}

const InputPassword: React.FC<InputPasswordProps> = (
  props: InputPasswordProps
) => {
  const { label, name, placeholder, rules = [], disabled } = props;
  const required: boolean = rules.some((rule: any) => rule?.required);
  return (
    <Form.Item label={label} name={name} rules={rules} required={required}>
      <Input.Password placeholder={placeholder} disabled={disabled} />
    </Form.Item>
  );
};

export default InputPassword;
