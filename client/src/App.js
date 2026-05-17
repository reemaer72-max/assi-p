import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
import EditExpense from "./Components/EditExpense.js";
import AddExpense from "./Components/AddExpense.js";
import ExpenseList from "./Components/ExpenseList.js";
import Profile from "./Components/Profile.js";
import About from "./Components/AboutO.js";
import { fetchCurrentUser } from "./Features/UserSlice.js";
import ProtectedRoute from "./ProtectedRoute.js";
import { getStoredUser } from "./utils/storage.js";

function App() {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.users.user);
  const storedUser = getStoredUser();
  const user = reduxUser || storedUser;

  useEffect(() => {
    if (
      storedUser?._id &&
      (!reduxUser || String(reduxUser._id) !== String(storedUser._id))
    ) {
      dispatch(fetchCurrentUser(storedUser._id));
    }
  }, [dispatch, reduxUser, storedUser?._id]);

  return (
    <Router>
      <div className="app-shell">
        {user && <Header />}

        <main className={user ? "main-content" : "auth-content"}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={user ? "/home" : "/login"} replace />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/home" replace /> : <Login />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/home" replace /> : <Register />}
            />

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/expenses"
              element={
                <ProtectedRoute>
                  <ExpenseList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/add-expense"
              element={
                <ProtectedRoute>
                  <AddExpense />
                </ProtectedRoute>
              }
            />

            <Route
              path="/edit-expense/:id"
              element={
                <ProtectedRoute>
                  <EditExpense />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route
              path="*"
              element={<Navigate to={user ? "/home" : "/login"} replace />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
