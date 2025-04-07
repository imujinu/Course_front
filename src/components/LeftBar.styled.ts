import styled from "styled-components";

const Logo = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const LeftBarStyle = styled.div`
  width: 20%;
  background: #d9eafd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #cce7ff;
  }
`;

const Button = styled.button`
  background: #64b5f6;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

//로그인창

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled.button`
  padding: 12px 24px;
  background-color: #5ab9ea;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  min-width: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #5ab9ea;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

export {
  Logo,
  LeftBarStyle,
  NavItem,
  Button,
  Container,
  LoginButton,
  ModalOverlay,
  ModalContent,
  Input,
  SubmitButton,
};
