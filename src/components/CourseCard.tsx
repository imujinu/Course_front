import { Course } from "../interface/Course";
import { useStore } from "../store/store";
import { Badge, Card, CardTitle, Professor, Schedule } from "./Main.styled";

// CourseCard 컴포넌트
const CourseCard = ({ course }: { course: Course }) => {
  const addCourse = useStore((state) => state.addCourse); // useStore에서 addCourse 액션 사용

  return (
    <Card
      key={course.id}
      onClick={() => {
        addCourse(course); // 클릭 시 course를 store에 추가
      }}
    >
      <CardTitle>{course.course}</CardTitle>
      <Badge color={course.isOnline == "오프라인" ? "#0056b3 " : "#28a745"}>
        {course.isOnline}
      </Badge>
      <Badge color={course.isMajor == "전공" ? "#ff9900 " : "#ff5733"}>
        {course.isMajor}
      </Badge>
      <Professor>{course.professor} 교수</Professor>
      <Schedule>{course.date + "\n" + course.time}</Schedule>
    </Card>
  );
};

export default CourseCard;
