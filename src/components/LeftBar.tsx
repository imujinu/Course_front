import { useState } from "react";
import {
  LeftBarStyle,
  Logo,
  NavItem,
  Button,
  Container,
  LoginButton,
  ModalOverlay,
  ModalContent,
  Input,
  SubmitButton,
} from "./LeftBar.styled";
import axios from "axios";

export default function LeftBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    axios
      .post(
        "http://localhost:8080/login",
        {
          studentNumber,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          alert("로그인 성공");
        } else {
          alert("로그인 실패");
        }
      });
  };

  return (
    <>
      <LeftBarStyle>
        <Logo>새싹 신청</Logo>
        <Container>
          <LoginButton onClick={() => setIsModalOpen(true)}>로그인</LoginButton>

          {isModalOpen && (
            <ModalOverlay onClick={() => setIsModalOpen(false)}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>로그인</h2>
                <Input
                  placeholder="학번"
                  value={studentNumber}
                  onChange={(e) => {
                    setStudentNumber(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <SubmitButton onClick={Login}>로그인</SubmitButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </Container>
        <NavItem>개설교과목 검색</NavItem>
        <NavItem>마이페이지</NavItem>
        <NavItem>장바구니</NavItem>
        <NavItem>동시 신청</NavItem>
      </LeftBarStyle>
    </>
  );
}
