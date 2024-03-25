import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="h-screen bg-slate-700 flex items-center justify-center">
        <div className="flex bg-white w-2/4 rounded-xl min-h-96 font-bold overflow-hidden flex-row-reverse">
          <div
            className="flex-1 bg-cover p-12 flex flex-col gap-8 text-white "
            style={{
              background:
                " linear-gradient(rgba(10, 30, 80, 0.8), rgba(10,30,80, 0.8)), url('https://animotaku.fr/wp-content/uploads/2021/05/Jujutsu-kaisen-anime-visuel-8.jpeg') center",
            }}
          >
            <h1 className="text-6xl">KEN SOCIAL MEDIA</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quidem.
            </p>
            <span className="text-sm">Do you have an account?</span>
            <Link to="/login">
              <button className="w-2/3 p-2 border-none bg-neutral-400 text-black font-bold">
                Login
              </button>
            </Link>
          </div>
          <div className="flex-1 p-11 flex flex-col gap-11 justify-center">
            <h1 className="text-3xl text-slate-600">Register</h1>
            <form action="" className="flex flex-col gap-7 ">
              <input
                type="text"
                placeholder="Username"
                className="border-b border-solid py-5"
              />
              <input
                type="email"
                placeholder="Email@gmail.com"
                className="border-b border-solid py-5"
              />
              <input
                type="password"
                placeholder="******"
                className="border-b border-solid py-5"
              />
              <input
                type="text"
                placeholder="FullName"
                className="border-b border-solid py-5"
              />
              <button className="w-3/4 p-2 border-none bg-slate-500 text-black font-bold">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
