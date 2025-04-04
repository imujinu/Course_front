import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <LeftBar>
        <Logo>새싹 신청</Logo>
        <Button>로그인</Button>
        <NavItem>개설교과목 검색</NavItem>
        <NavItem>마이페이지</NavItem>
        <NavItem>장바구니</NavItem>
        <NavItem>동시 신청</NavItem>
      </LeftBar>

      <MainSection>
        <TopSection>
          <FilterGroup>
            <FilterButton selected>수강학년</FilterButton>
            <FilterButton>교수</FilterButton>
            <FilterButton>학점</FilterButton>
            <FilterButton>분류</FilterButton>
          </FilterGroup>
        </TopSection>
        <BottomSection>
          <Card>
            <CardTitle>컴퓨터 구조</CardTitle>
            <Badge color="#0056b3">오프라인</Badge>
            <Badge color="#ff9900">전공</Badge>
            <Professor>김진우 교수</Professor>
            <Schedule>월, 목 10:00~11:50</Schedule>
          </Card>
          <Card>
            <CardTitle>운영체제</CardTitle>
            <Badge color="#28a745">온라인</Badge>
            <Badge color="#ff5733">교양</Badge>
            <Professor>박진우 교수</Professor>
            <Schedule>월, 목 10:00~11:50</Schedule>
          </Card>
        </BottomSection>
      </MainSection>

      <RightBar>
        <UserInfo>
          <p>일진우 님 환영합니다.</p>
          <Button>수강 신청</Button>
        </UserInfo>
        <EnrolledCourses>
          <SmallCard>
            <Badge color="#0056b3">오프라인</Badge>
            <Badge color="#ff9900">전공</Badge>
            <p>컴퓨터 구조</p>
          </SmallCard>
          <SmallCard>
            <Badge color="#28a745">온라인</Badge>
            <Badge color="#ff5733">교양</Badge>
            <p>운영체제</p>
          </SmallCard>
        </EnrolledCourses>
      </RightBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LeftBar = styled.div`
  width: 20%;
  background: #d6e4f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightBar = styled.div`
  width: 20%;
  background: #eaeff5;
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

const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const BottomSection = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 10px;
`;

interface FilterButtonProps {
  selected?: boolean;
}

const FilterButton = styled.button<FilterButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.selected ? "#007bff" : "#e0e0e0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
`;

const Card = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
`;

const SmallCard = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const EnrolledCourses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
`;

const Badge = styled.span`
  background: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
`;

const Professor = styled.p`
  font-size: 12px;
  color: gray;
`;

const Schedule = styled.p`
  font-size: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default App;
