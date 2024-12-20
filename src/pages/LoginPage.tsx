import { ArrowLeft, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    
      <div className="p-5">
        <Link to="/">
          <ArrowLeft />
        </Link>
        <div className="flex flex-col items-center">
          <img src="src/assets/logo-black.svg" alt="logo" className="mt-[132px]"/>
          <h1 className="font-semibold text-3xl mt-[118px]">
            Login to Your Account
          </h1>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-12 bg-[#FAFAFA]">
            <Mail className="mt-[5px]" />
            <input
              type="text"
              placeholder="Email"
              className="w-full px-2 bg-[#FAFAFA]"
            />
          </div>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-[29px] bg-[#FAFAFA]">
            <Lock className="mt-[5px]"/>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-2 bg-[#FAFAFA]"
            />
            <EyeOff className="mt-[5px]" />
          </div>
          <div className="flex justify-between gap-16 mt-3">
            <Link to="/">Forgot Password?</Link>
            <div>
              <input type="checkbox" name="checkbox" />
              <label htmlFor="checkbox" className="ml-2">
                Remember Me
              </label>
            </div>
          </div>
          <button className="w-full h-[47px] mt-[220px] rounded-[30px] bg-[#212529] text-white">
            Sign In
          </button>
          <div className="flex justify-between gap-8 mt-3 text-lg">
            <span className="text-[#6C757D]">Don’t have an account?</span>
            <Link to="/sign-in">Register Now</Link>
          </div>
        </div>
      </div>
    
  );
};

export default LoginPage;
