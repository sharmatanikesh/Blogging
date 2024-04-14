import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className=" h-screen flex flex-col justify-center">
          <div className="flex justify-center ">
            <div className="max-w-lg ">
              <div className=" text-3xl flex font-bold ">Blogging Website</div>
              <div className="max-w-md  text-xl font-bold">
                <div className="flex  justify-center">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="mt-8 w-1/2 text-white bg-blue-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/signin");
                  }}
                  className="mt-8 w-1/2 text-white bg-blue-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  Sign In
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-slate-200 h-screen flex flex-col justify-center">
          <div className="flex justify-center ">
            <div className="max-w-lg ">
              <div className=" text-3xl font-bold ">
                The best way to predict the future is to create it.
              </div>
              <div className="max-w-md  text-xl font-bold">Anonymous</div>
              <div className="max-w-md  text-sm text-slate-500 font-semibold">
                CEO , Anonymous
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
