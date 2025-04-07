import {
  Badge,
  Button,
  EnrolledCourses,
  RightBarStyle,
  SmallCard,
  UserInfo,
} from "./RightBar.styled";

export default function RightBar() {
  return (
    <>
      <RightBarStyle>
        <UserInfo>
          <p>임진우 님 환영합니다.</p>
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
      </RightBarStyle>
    </>
  );
}
