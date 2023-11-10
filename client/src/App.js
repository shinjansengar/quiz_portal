import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import QuizPage from "./pages/QuizPage";
import Header from "./components/Header";
import PrivateRoute from "./HOC/PrivateRoute";
import IsLoggedIn from "./HOC/IsLoggedIn";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          index
          element={
            <IsLoggedIn>
              <LoginPage />
            </IsLoggedIn>
          }
        />
        <Route
          path="/signup"
          element={
            <IsLoggedIn>
              <SignupPage />
            </IsLoggedIn>
          }
        />
        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <QuizPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
