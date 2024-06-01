import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import { Container } from "react-bootstrap";
import MainStyles from "./styles/Main.module.css"

function App() {

  return (
    <>
      <NavBar />
      <Container fluid className={`px-4 ${MainStyles.excaliburBG}`}>
        <HomeView />
      </Container>
    </>
  );
}

export default App;
