import React from "react";
import Layout from "../../shared/ui/Layout/Layout";
import FormPageWrapper from "./FormPageWrapper";
import { Form } from "antd/lib";
import { Col, Divider, Row } from "antd";
import { Tooltip } from "../../shared/ui/Tooltip/Tooltip";
import { formData, formRadioData } from "./form.data";
import {
  ElementsList,
  InputText,
  RadioGroup,
  Select,
} from "../../features/FormItems";
import { Button } from "../../shared/ui/Button/Button";

const FormPage: React.FC = () => {
  const [form] = Form.useForm();
  const onNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  const onChooseAuthor = (value: string) => {
    console.log("Автор продукта ", value);
  };

  const onSubmit = () => {
    const data = form.getFieldsValue();

    console.log(data);
  };

  return (
    <FormPageWrapper>
      <Layout title="Форма обратной связи">
        <Form
          name="form-example"
          layout="vertical"
          className="form"
          form={form}
        >
          <Row gutter={5}>
            <Col flex="auto" span={5}>
              Название продукта
              <Tooltip title="Подсказка" />
            </Col>
            <Col className="input-text">
              <Form.Item
                className="form-item"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите имя!",
                    type: "string",
                  },
                ]}
              >
                <InputText
                  allowClear
                  placeholder="Название продукта"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  maxLength={100}
                  onChange={onNameChange}
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider type="horizontal" />

          <Row gutter={5}>
            <Col flex={1} span={5}>
              Автор продукта
            </Col>
            <Col flex={2}>
              <Form.Item
                name="author"
                rules={[
                  { required: true, message: "Обязательно для заполнения" },
                ]}
              >
                <Select
                  showSearch
                  allowClear
                  filterOption={false}
                  placeholder="Автор продукта"
                  options={formData}
                  className="select"
                  fieldNames={{ label: "name", value: "name" }}
                  onChange={onChooseAuthor}
                  optionRender={(option) => {
                    return (
                      <div key={option.data.name}>
                        <p>{option.data.name}</p>
                        <p>{option.data.email}</p>
                      </div>
                    );
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider type="horizontal" />

          <Row style={{ display: "flex" }} gutter={10}>
            <Col flex={1} span={5}>
              Соавторы
            </Col>
            <Col flex={2}>
              <ElementsList name="soauthors" />
            </Col>
          </Row>

          <Divider type="horizontal" />

          <Row gutter={10}>
            <Col flex={1} span={5}>
              Тип продукта
            </Col>
            <Col flex={2}>
              <RadioGroup name="type" data={formRadioData} />
            </Col>
          </Row>

          <Row>
            <Col flex={1}>
              <Button
                type="primary"
                wrapperStyle="button-wrapper"
                className="button-save"
                title="Сохранить"
                onClick={onSubmit}
              />
            </Col>
          </Row>
        </Form>
      </Layout>
    </FormPageWrapper>
  );
};

export default FormPage;
