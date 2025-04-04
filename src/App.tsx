import "./App.css";
import Course from "./components/Course";
import LeftBar from "./components/LeftBar";
import Option from "./components/Option";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <h1>홈입니다다</h1>
      <LeftBar />
      <Option />
      <Course />
      <RightBar />
    </>
  );
}

export default App;
