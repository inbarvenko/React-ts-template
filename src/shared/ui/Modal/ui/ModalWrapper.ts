import styled from "styled-components";

const ModalWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 80%;
  padding-bottom: 20px;
  
  color: #000;
  font-family: "HeliosCondC";
  background-color: #FCFCFC;

  border: 1px solid #BABFC7;
  border-radius: 16px;

  .modal-header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 40px;

    font-size: 16px;
    background-color: #E4E6E8;
    border-radius: 16px 16px 0px 0px;
    border-bottom: #BABFC7 1px solid;
  }

  .modal-close {
    position: absolute;
    right: 15px;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0px 20px;

    &-info {
      display: flex;
      flex-direction: column;

      &-title {
        margin: 5px 0px 5px 0px;
      }

      &-text {
        margin: 0px 0px 15px 0px;
      }
    }

    &-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      width: 100%;
      gap: 15px;
    }
  }
`;

export default ModalWrapper;
