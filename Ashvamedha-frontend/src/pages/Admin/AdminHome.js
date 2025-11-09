import React, { useEffect, useState } from "react";
import { useLogin } from "../../context/loginContextProvider";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

function AdminHome() {
  const loginCtx = useLogin();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    const response = window.confirm("Are you sure you want to logout");
    if (response) {
      loginCtx.logout();
      navigate("/");
      alert("Logged out successfully");
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-36 flex justify-center items-center min-h-[80vh] min-w-screen p-6 text-white">
        {!loading ? (
          <>
            {loginCtx.isLoggedIn ? (
              <div className="text-center px-6 py-8 rounded-2xl shadow-[0_0_30px_rgba(255,69,0,0.4)] border border-[#ff4500]/40 backdrop-blur-md bg-white/5 max-w-lg w-full space-y-6 transition-transform duration-500 hover:scale-[1.02]">
                <h2 className="text-3xl font-extrabold text-[#ffae42] tracking-wide drop-shadow-md">
                  You are Logged In as {loginCtx.sport} Admin
                </h2>
                <p className="text-gray-300">
                  Note : You can only make changes for{" "}
                  <span className="text-[#ff4500] font-semibold">
                    {loginCtx.sport}
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-6">
                  <Link
                    to={`/livescore/${loginCtx.sport}`}
                    className="bg-gradient-to-r from-[#ff4500] to-[#ff6347] text-white font-bold py-2.5 px-5 rounded-lg text-center shadow-lg shadow-[#ff4500]/40 hover:shadow-[#ffae42]/60 hover:scale-105 transition-all duration-300 w-48"
                  >
                    See Livescore ({loginCtx.sport})
                  </Link>

                  <Link
                    to="/setlivescore"
                    className="bg-gradient-to-r from-[#ff4500] to-[#ff6347] text-white font-bold py-2.5 px-5 rounded-lg text-center shadow-lg shadow-[#ff4500]/40 hover:shadow-[#ffae42]/60 hover:scale-105 transition-all duration-300 w-48"
                  >
                    Create New Live Score
                  </Link>

                  <Link
                    to="/updatelivescore"
                    className="bg-gradient-to-r from-[#ff4500] to-[#ff6347] text-white font-bold py-2.5 px-5 rounded-lg text-center shadow-lg shadow-[#ff4500]/40 hover:shadow-[#ffae42]/60 hover:scale-105 transition-all duration-300 w-48"
                  >
                    Update Live Score
                  </Link>

                  {/* <Link
                    to="/updatepointstable"
                    className="bg-gradient-to-r from-[#ff4500] to-[#ff6347] text-white font-bold py-2.5 px-5 rounded-lg text-center shadow-lg shadow-[#ff4500]/40 hover:shadow-[#ffae42]/60 hover:scale-105 transition-all duration-300 w-48"
                  >
                    Set Points Table Score
                  </Link> */}
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-[#ff4500] to-[#ff6347] text-white font-bold py-2.5 px-5 rounded-lg shadow-lg shadow-[#ff4500]/40 hover:shadow-[#ffae42]/60 hover:scale-105 transition-all duration-300 w-48 mt-6"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-center text-white font-semibold p-8 rounded-xl border border-[#ff4500]/50 shadow-[0_0_25px_rgba(255,69,0,0.3)] backdrop-blur-md bg-white/5 transition-all hover:scale-[1.02]">
                <h2 className="text-2xl mb-3 text-[#ffae42] font-bold drop-shadow-md">
                  You are not logged in
                </h2>
                <button
                  onClick={() => navigate("/admin/login")}
                  className="bg-gradient-to-r from-[#ff4500] to-[#ff6347] text-white font-bold py-2.5 px-5 rounded-lg mt-2 hover:shadow-[#ffae42]/60 hover:scale-105 transition-all duration-300"
                >
                  Login
                </button>
              </div>
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default AdminHome;
