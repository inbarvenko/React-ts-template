import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;

  .toolbar {
    /* background-color: red; */
    padding: 0px 10px;

    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 0;

    &-first {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .rbc-toolbar-label {
      align-self: center;
    }
  }

  .button-group {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    color: black;

    &-3 {
      height: 35px;
      display: flex;
      flex-direction: row;
      gap: 5px;
      justify-content: center;
      align-items: center;

      &-item {
        font-size: 14px;
        padding: 7px;
        box-shadow: 0 0.5px 0.5px 0 rgba(60, 54, 67, 0.2),
          0 1px 1px 1px rgba(60, 64, 67, 0.1);
      }
    }

    .arrow {
      vertical-align: middle;
    }

    button {
      color: black;

      &:focus,
      &:focus-visible {
        outline: none;
      }

      &:hover {
        background-color: #f9f9f9;
      }

      &:active {
        background-color: #f1f1f1;
      }
    }

    &-add {
      height: 35px;
      padding: 10px;

      border-radius: 50px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5px;

      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);

      font-size: 14px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    font-family: "HeliosCondC";

    &-item {
      margin-bottom: 0px;
    }
    padding: 20px 0px;
  }
`;
