import styled from "styled-components";
import {
  Badge,
  BottomSection,
  Card,
  CardTitle,
  FilterButton,
  FilterGroup,
  MainSection,
  Professor,
  Schedule,
  TopSection,
} from "./Main.styled";

export default function Main() {
  return (
    <>
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
    </>
  );
}
