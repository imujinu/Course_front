import styled from "styled-components";
import "./App.css";
import LeftBar from "./components/LeftBar";
import Main from "./components/Main";
import RightBar from "./components/RightBar";

function App() {
  return (
    <Container>
      <LeftBar />
      <Main />
      <RightBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export default App;
