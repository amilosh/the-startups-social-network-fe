import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import CreatePost from "./CreatePost";

function App() {
  const [buttonText, setButtonText] = useState("Create Post");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/create-post") {
      setButtonText("Post creation");
      setIsButtonDisabled(true);
    } else {
      setButtonText("Create Post");
      setIsButtonDisabled(false);
    }
  }, [location]);

  return (
      <div className="bg-gray-100 min-h-screen">
        {/* Верхняя панель */}
        <header className="bg-white shadow-md p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            {/* Логотип X Clone с переходом на главную страницу */}
            <Link to="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                X Clone
              </h1>
            </Link>
            <Link to="/create-post">
              <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  disabled={isButtonDisabled}
              >
                {buttonText}
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
          </Routes>
        </main>
      </div>
  );
}

export default App;
