import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@sharmatanikesh/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const AuthSignup = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name:""
  });
  const navigate = useNavigate()
  async function signup(){
    try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs)
        const jwt = response.data.jwt
        console.log("JWT TOKEN",jwt)
        localStorage.setItem("token",jwt)
        navigate('/blog')

    }catch(error){
        console.error("API REQUEST FAILED:",error)
    }
  }
  
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-400 pt-2 text-center">
            "Already have an account 
            <Link className="underline pl-2" to={"/signin"}>
                Sign In
            </Link>
          </div>
          <div>
             <LabelledInput
              label="Name"
              placeholder="demo"
              onChange={(e) => {
                setPostInputs({ ...postInputs, name: e.target.value });
              }}
            ></LabelledInput>

            <LabelledInput
              label="Email"
              placeholder="demo@gmail.com"
              onChange={(e) => {
                setPostInputs({ ...postInputs, email: e.target.value });
              }}
            ></LabelledInput>

            <LabelledInput
              label="Password"
              placeholder="password"
              onChange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
            ></LabelledInput>

            <button
              type="button"
              onClick={signup}
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
             Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 pt-1 mt-4 text-md font-medium text-black ">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
