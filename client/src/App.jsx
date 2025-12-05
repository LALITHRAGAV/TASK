import { useState } from "react";
import TaskBoard from "./components/TaskBoard";
import AuthPage from "./pages/AuthPage";

export default function App() {
  const [user, setUser] = useState(localStorage.getItem("token") ? true : false);

  return (
    <div style={{ padding: "20px" }}>
      {!user ? (
        <AuthPage setUser={setUser} />
      ) : (
        <>
          <h2>TaskFlow - Kanban Board</h2>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setUser(false);
            }}
          >
            Logout
          </button>
          <TaskBoard />
        </>
      )}
    </div>
  );
}
