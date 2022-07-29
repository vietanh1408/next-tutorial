import { Form, Checkbox as AntCheckbox } from "antd";
import { Rule } from "antd/lib/form";
import React from "react";

interface CheckboxProps {
  label: string;
  name: string;
  rules?: Rule[];
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { label, name, rules } = props;
  return (
    <Form.Item
      name={name}
      valuePropName="checked"
      rules={rules}
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <AntCheckbox>{label}</AntCheckbox>
    </Form.Item>
  );
};

export default Checkbox;
