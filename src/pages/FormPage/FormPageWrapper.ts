import styled from "styled-components";
import { colors } from "../../shared/assets/colors";

const FormPageWrapper = styled.div`
  flex: 1;

  .form {
    padding: 15px;

    .ant-col,
    .ant-select-selector,
    textarea {
      font-family: "HeliosCondC";
    }

    &-item {
      height: 50px;
    }
  }

  .ant-divider-horizontal {
    margin: 12px 0;
  }

  .input-text {
    flex: 1;
  }

  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-select-single {
    width: 100%;
  }

  .ant-select-selector {
    flex: 1;
  }

  .ant-radio-wrapper {
    font-family: "HeliosCondC";
  }

  .button-save {
    margin-top: 40px;

    background: ${colors["light"].color_main_blue_50};
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export default FormPageWrapper;
