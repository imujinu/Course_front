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
import axios from "axios";
import { useEffect, useState } from "react";
import { useStore } from "../store/store";
import CourseCard from "./CourseCard";
import { Course } from "../interface/Course";

export default function Main() {
  const [course, setCourses] = useState<Course[]>([]);
  const { courses, addCourse } = useStore();
  useEffect(() => {
    axios
      .get("http://localhost:8080/course")
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err, "수강정보 조회 실패");
      });
  }, []);

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
          {course.map((course, index) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </BottomSection>
      </MainSection>
    </>
  );
}
