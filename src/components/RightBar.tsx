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
import axios from "axios";

export default function RightBar() {
  const { courses, name } = useStore();
  useEffect(() => {
    console.log(courses);
  }, [courses]);

  const regist = () => {
    axios
      .post(
        "http://localhost:8080/login",
        {
          courses,
          name,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.isSuccess) {
          alert("수강신청이 완료되었습니다.");
        } else {
          alert("정원이 초과된 과목이 존재합니다.");
        }
      })
      .catch((err) => {
        console.log(err + "error!");
      });
  };

  return (
    <>
      <RightBarStyle>
        <UserInfo>
          {name == "" ? "로그인이 필요합니다." : name + "님 환영합니다."}
        </UserInfo>
        <EnrolledCourses>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
          <Button onClick={regist}>수강 신청</Button>
        </EnrolledCourses>
      </RightBarStyle>
    </>
  );
}
