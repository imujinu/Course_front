import { useEffect } from "react";
import { useStore } from "../store/store";
import {
  Badge,
  Button,
  EnrolledCourses,
  RightBarStyle,
  SmallCard,
  UserInfo,
} from "./RightBar.styled";
import CourseCard from "./CourseCard";

export default function RightBar() {
  const { courses } = useStore();
  useEffect(() => {
    console.log(courses);
  }, [courses]);
  return (
    <>
      <RightBarStyle>
        <UserInfo>
          <p>임진우 님 환영합니다.</p>
        </UserInfo>
        <EnrolledCourses>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
          <Button>수강 신청</Button>
        </EnrolledCourses>
      </RightBarStyle>
    </>
  );
}
