import { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
const [signinForm, setSigninForm] = useState(true)

const toggleSigninForm = () => {
  setSigninForm(!signinForm)
}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="Netlfic background image" />
      </div>

      <div className="w-4/12 absolute p-10 m-4 bg-black mx-auto right-0 left-0 my-40  opacity-80">
        <form>
          <label className="text-2xl font-bold text-white p-2 mx-10">
              {signinForm ? 'Sign In' : "Sign Up"}
          </label>
          <br />
          {!signinForm  && (
                      <><input type="text" placeholder="Name" className="p-4 mx-12 mt-6 bg-transparent text-white border border-s-gray-10 rounded-lg w-4/5" /><br /></>
          )}
          <input type="text" placeholder="Email ID" className="p-4 mx-12 mt-6 bg-transparent text-white border border-s-gray-10 rounded-lg w-4/5" /><br/>
          <input type="password" placeholder="Password" className="p-4 mt-4 mx-12 bg-transparent text-white border border-s-gray-10 rounded-lg w-4/5" /><br/>
          <button className="p-2 mx-12 mt-4 bg-orange-600 text-white w-4/5">{signinForm ? "Sign In" : "Sign Up"}</button>
          <p className="py-4 mx-12 text-white">{signinForm ? "New to Netflix?" : "Already a user?"} <span className="cursor-pointer underline text-orange-500" 
          onClick={toggleSigninForm}>{signinForm ? "Sign Up Now" : "Sign In Now"}</span> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
