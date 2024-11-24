import BillInLogo from "@assets/billinTr.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Done");
    navigate("/");
  };
  return (
    <div className="w-full flex justify-center">
      <form
        className="w-full md:w-[28rem] shadow min-h-screen p-4"
        onSubmit={handleOnSubmit}
      >
        <img src={BillInLogo} alt="" />
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5"
            placeholder="Masukkan email kamu"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan password kamu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg block text-sm w-full px-5 py-2.5 text-center"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
