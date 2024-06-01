import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import { Container } from "react-bootstrap";
import MainStyles from "./styles/Main.module.css"

function App() {

  return (
    <div className={`${MainStyles.excaliburBG}`}>
      <NavBar />
      <Container fluid className={``}>
        <HomeView />
      </Container>
    </div>
  );
}

export default App;
