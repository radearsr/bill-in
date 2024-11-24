import Profile from "@assets/profileMegumi.png";
import Partnership from "@assets/partnership.png";
import Email from "@assets/email.png";
import Telephone from "@assets/telephone.png";
import CardProfileInfo from "@/components/card-profile-info/card-profile-info.component";

const Account = () => {
  return (
    <div className="flex flex-col items-center w-full pb-24">
      <img src={Profile} alt="" className="w-36 h-36 rounded-full mt-5" />
      <h2 className="text-2xl font-bold mt-1">Megumi Chann</h2>
      <p className="text-center text-gray-400 p-2 mb-2">
        Desa Desu, 3 Chome-196 Distric Kashiharacho Tokyo Jepang
      </p>

      <CardProfileInfo
        icon={Partnership}
        title="Join At"
        content="24 Oktober 2024"
      />
      <CardProfileInfo
        icon={Email}
        title="Email"
        content="erika.chan@kyo.kyun"
      />
      <CardProfileInfo
        icon={Telephone}
        title="Phone Number"
        content="09343343434332"
      />

      <div className="flex justify-between items-center w-11/12 border-2 p-2 rounded-md border-slate-200 mt-5">
        <p className="text-slate-500">Ubah Password</p>
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-slate-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </div>
      <div className="flex justify-between items-center w-11/12 border-2 p-2 rounded-md border-slate-200 mt-2">
        <p className="text-slate-500">Ubah Profile</p>
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-slate-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </div>
      <button className="bg-red-100 p-2 rounded-md block w-11/12 mt-3 text-red-500 hover:bg-white hover:border-2 hover:border-red-500">
        Logout
      </button>
    </div>
  );
};

export default Account;
