import { useState } from "react";

const Login = ({ switchMode }:any) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 mb-2 rounded bg-gray-700" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-700" />
      <button className="w-full bg-blue-500 p-2 rounded">Login</button>
      <p className="mt-4 text-sm">Don't have an account? <button onClick={switchMode} className="text-blue-400">Sign up</button></p>
    </div>
  );
};

const Signup = ({ switchMode }:any) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input type="text" placeholder="Username" className="w-full p-2 mb-2 rounded bg-gray-700" />
      <input type="email" placeholder="Email" className="w-full p-2 mb-2 rounded bg-gray-700" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-700" />
      <button className="w-full bg-green-500 p-2 rounded">Sign Up</button>
      <p className="mt-4 text-sm">Already have an account? <button onClick={switchMode} className="text-blue-400">Login</button></p>
    </div>
  );
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {isLogin ? <Login switchMode={() => setIsLogin(false)} /> : <Signup switchMode={() => setIsLogin(true)} />}
    </div>
  );
}
