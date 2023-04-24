import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100vh;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin: 11px 36px 25px 36px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 76px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;
`;

export const Inputs = styled.input`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  padding: 19px 139px 18px 15px;
  margin-bottom: 42px;
  height: 58px;
  color: #ffffff;
`;

export const Button = styled.button`
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2.5px;
  padding: 24px 113px;
  background: #d93856;
  color: #ffff;
  border: none;
  outline: none;
  margin-top: calc(76px - 42px);
  cursor: pointer;
  height: 68px;

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.7;
  }
`;

export const Orders = styled.li`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  width: 323.09px;
  height: 101px;
  color: #ffffff;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;
