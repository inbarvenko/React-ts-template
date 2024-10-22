import styled from "styled-components";

export const CalendarPageWrapper = styled.div`
  .Adapter {
    width: 100%;

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
