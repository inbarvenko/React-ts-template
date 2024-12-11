import React, { useState } from "react";
import { FormItemWrapper } from "./FormItemWrapper";
import { Form, Radio } from "antd";
import { RadioChangeEvent } from "antd/lib";

type Props = {
  data: any;
  name: string;
};

const RatioGroup: React.FC<Props> = ({ data, name }: Props) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <FormItemWrapper>
      <Form.Item name={name}>
        <Radio.Group onChange={onChange} value={value}>
          {data.map((item: any) => {
            return (
              <Radio value={item.value} key={item.value}>
                {item.name}
              </Radio>
            );
          })}
        </Radio.Group>
      </Form.Item>
    </FormItemWrapper>
  );
};

export default RatioGroup;
