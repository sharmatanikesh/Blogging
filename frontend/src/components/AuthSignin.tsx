import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput } from "@sharmatanikesh/medium-common";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const AuthSignin = () => {
  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function signin(){
    try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInputs)
        const jwt = response.data.token
        localStorage.setItem("token",jwt)
        navigate('/blogs')

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
            Donot have an account 
            <Link className="underline pl-2" to={'/signup'}>
             Sign Up
            </Link>
          </div>
          <div>
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
              onClick={signin}
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
             Sign In
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
