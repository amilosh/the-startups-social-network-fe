import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import CreatePost from "./CreatePost";
import Login from "./Login";
import Register from "./Register";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("x-user-id");
    if (!userId && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
      <div className="bg-gray-100 min-h-screen">
        {/* Верхняя панель */}
        <header className="bg-white shadow-md p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            {/* Логотип X Clone */}
            <Link to="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                X Clone
              </h1>
            </Link>
            <Link to="/create-post">
              <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Create Post
              </button>
            </Link>
          </div>
        </header>

        {/* Контент */}
        <main className="container mx-auto mt-6">
          <Routes>
            <Route
                path="/"
                element={
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Your Feed</h2>
                    <p className="text-gray-500">Coming soon...</p>
                  </div>
                }
            />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
