import React from "react";
import { ColorPicker as AntdColorPicker, Col, Divider, Row } from "antd";
import { presets } from "../../constants/presets";
import { ColorPickerProps } from "antd/lib";

const ColorPicker: React.FC = () => {
  const customPanelRender: ColorPickerProps["panelRender"] = (
    _,
    { components: { Picker, Presets } },
  ) => (
    <Row justify="space-between" wrap={false}>
      <Col span={12}>
        <Presets />
      </Col>
      <Divider type="vertical" style={{ height: "auto" }} />
      <Col flex="auto">
        <Picker />
      </Col>
    </Row>
  );

  return (
    <AntdColorPicker
      arrow
      defaultFormat="hex"
      mode="single"
      styles={{
        popupOverlayInner: {
          width: 320,
        },
      }}
      presets={presets}
      panelRender={customPanelRender}
    />
  );
};

export default ColorPicker;
