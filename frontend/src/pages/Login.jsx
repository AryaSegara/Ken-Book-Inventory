import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="h-screen bg-slate-700 flex items-center justify-center">
        <div className="flex bg-white w-2/4 rounded-xl min-h-96 font-bold overflow-hidden">
          <div
            className="flex-1 bg-cover p-12 flex flex-col gap-8 text-white "
            style={{
              background:
                " linear-gradient(rgba(10, 30, 80, 0.8), rgba(10,30,80, 0.8)), url('https://web.rupa.ai/wp-content/uploads/2023/06/GVS_A_profile_picture_of_Monkey_D._Luffy_the_main_character_fro_1575bcfc-6732-442d-bd05-3992247f095a.png') center",
            }}
          >
            <h1 className="text-6xl">KEN SOCIAL MEDIA</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quidem.
            </p>
            <span className="text-sm">Dont you have an account?</span>
            <Link to="/register">
              <button className="w-2/3 p-2 border-none bg-neutral-400 text-black font-bold">
                Register
              </button>
            </Link>
          </div>
          <div className="flex-1 p-11 flex flex-col gap-11 justify-center">
            <h1 className="text-3xl text-slate-600">Login</h1>
            <form action="" className="flex flex-col gap-7 ">
              <input
                type="text"
                placeholder="Username"
                className="border-b border-solid py-5"
              />
              <input
                type="password"
                placeholder="******"
                className="border-b border-solid py-5"
              />
              <button className="w-3/4 p-2 border-none bg-slate-500 text-black font-bold">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
