import React from "react";
import { Form } from "antd/lib";
import { Checkbox, Col, Row } from "antd";
import { Button } from "../../../shared/ui/Button/Button";
import { Tooltip } from "../../../shared/ui/Tooltip/Tooltip";
import { FormItemWrapper } from "./FormItemWrapper";
import SelectLocal from "./Select";
import { formData } from "../../../pages/FormPage/form.data";
import { BiMinusCircle, BiPlus } from "react-icons/bi";

type Props = {
  name: string;
};

const ElementsList: React.FC<Props> = ({ name }: Props) => {
  return (
    <FormItemWrapper>
      <Form.List name={name}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restFields }, index) => (
              <div key={key}>
                <Row
                  key={index}
                  align="middle"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  <Col flex={1}>
                    <Row key={"flex-row"} className="flex-row">
                      <Col flex={1}>
                        <Form.Item name={"name"} {...restFields}>
                          <SelectLocal
                            allowClear
                            filterOption={false}
                            placeholder="Соавтор продукта"
                            options={formData}
                            style={{ width: "100%" }}
                            fieldNames={{ label: "name", value: "name" }}
                            optionRender={(option) => {
                              return (
                                <div key={option.data.name}>
                                  <p style={{ margin: 5 }}>
                                    {option.data.name}
                                  </p>
                                  <p style={{ margin: 5 }}>
                                    {option.data.email}
                                  </p>
                                </div>
                              );
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col className="options">
                        <Form.Item name="checkbox">
                          <Tooltip
                            placement="top"
                            title="Много полезной ифнформации"
                          >
                            <Checkbox className="checkbox" />
                          </Tooltip>
                        </Form.Item>
                        <BiMinusCircle
                          size={20}
                          className="button-delete-item"
                          onClick={() => remove(name)}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            ))}

            <Form.Item>
              <Button
                title="Добавить элемент"
                className="button-add"
                icon={<BiPlus size={20} />}
                onClick={add}
              />
            </Form.Item>
          </>
        )}
      </Form.List>
    </FormItemWrapper>
  );
};

export default ElementsList;
