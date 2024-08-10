import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
// import { api } from "../until";

const Login = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useOutletContext();
  const [login, setLogin] = useState({ username: "", password: "" });

  if (admin) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold"> Login </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",

                      },
                      body: JSON.stringify(login),
                    }
                  );
                  if(response.ok){
                    const auth = await response.json();
                    localStorage.setItem("token",auth.token)
                    setAdmin(auth.user)
                    navigate("/");
                    alert("Login Berhasil");
                    window.location.reload();
                  }else{
                    const message = await response.text();
                    alert(message);
                  }
                  }}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Username"
                      value={login.username}
                      onChange={(e) =>
                        setLogin({ ...login, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      value={login.password}
                      onChange={(e) =>
                        setLogin({ ...login, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
