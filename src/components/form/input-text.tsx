import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";
import React from "react";

interface InputTextProps {
  label: string;
  name: string;
  placeholder?: string;
  rules?: Rule[];
  disabled?: boolean;
}

const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  const { label, name, placeholder, rules = [], disabled } = props;

  const required: boolean = rules.some((rule: any) => rule?.required);

  return (
    <Form.Item label={label} name={name} rules={rules} required={required}>
      <Input placeholder={placeholder} disabled={disabled} />
    </Form.Item>
  );
};

export default InputText;
