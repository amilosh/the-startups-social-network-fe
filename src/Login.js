import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            localStorage.setItem("x-user-id", "123");
            navigate("/");
        } else {
            alert("Please fill in both fields.");
        }
    };

    const handleRegisterRedirect = () => {
        navigate("/register");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center my-4">
                    <span className="text-gray-500">or</span>
                </div>
                <div className="text-center">
                    <button
                        onClick={handleRegisterRedirect}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
