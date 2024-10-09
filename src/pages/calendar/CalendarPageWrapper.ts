import styled from "styled-components";

export const CalendarPageWrapper = styled.div`
  position: relative;

  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  background-color: #fcfcfc;
  border-radius: 16px;
  border: 1px solid #f1f1f1;

  .Header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: #000000 1px solid;
    margin-bottom: 10px;

    &-text {
      font-family: "HeliosCondC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.01em;
      color: #000000;

      margin: 10px;
    }
  }

  .Adapter {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-family: "HeliosCondC";
  }

  .rbc-month-view {
    padding: 10px;
    border-radius: 16px;
  }

  .rbc-month-header {
    font-size: var(--size-text-xs);
  }

  .rbc-toolbar {
    flex-direction: column;
    gap: 20px;
  }

  .rbc-overlay-header {
    color: #000;
    font-family: "HeliosCondC";
  }

  .rbc-show-more {
    border-radius: 2px;
    border-color: #85c4ff !important;
  }

  .close {
    display: none;
  }

  .bubble-1 {
    background-color: #5f6770 !important;
  }

  .bubble-2 {
    background-color: #ff4d07 !important;
  }

  .rbc-selected {
    background-color: #008cff !important;
  }
`;
