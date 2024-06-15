import NavBar from "./components/NavBar";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import { Container } from "react-bootstrap";
import MainStyles from "./styles/Main.module.css";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";

function App() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className={`${MainStyles.excaliburBG}`}>
      <BrowserRouter>
        <NavBar
          onSignUpClicked={() => setShowSignUpModal(true)}
          onLoginClicked={() => setShowLoginModal(true)}
        />
        <Container fluid>
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </Container>
        {showSignUpModal && (
          <SignUpModal onDismiss={() => setShowSignUpModal(false)} />
        )}

        {showLoginModal && (
          <LoginModal onDismiss={() => setShowLoginModal(false)} onLoginSuccessful={(user) => console.log(user)}/>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
