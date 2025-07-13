import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../zustand/store";
import { login } from "../../auth/Auth";

const Login = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");
  const { setToken } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(username, password);
      setToken(data.accessToken);
      navigate("/");
    } catch (err: any) {
      setError("Login failed: " + (err.response?.data?.message || "Xatolik"));
    }
  };

  return (
    <div className="bg-gray-50 px-3 content-center min-h-[100vh] flex items-center">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-400 bg-white rounded-[10px] py-5 px-3 max-w-[600px] w-full mx-auto"
      >
        <h2 className="text-[30px] font-semibold mb-4">Login</h2>

        {error && <p className="text-red-600 mb-3 font-medium">{error}</p>}

        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            className="h-[40px] border border-gray-300 rounded-[6px] px-3 mt-1 mb-3 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="h-[40px] border border-gray-300 rounded-[6px] px-3 mt-1 mb-3 outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full h-[40px] rounded-[6px] text-white font-medium cursor-pointer hover:bg-blue-700 duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default React.memo(Login);
