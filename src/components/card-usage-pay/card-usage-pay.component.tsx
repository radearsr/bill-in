const CardUsagePay = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm my-4 mx-auto">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
        Pembayaran Bulan Ini
      </h5>
      <p className="mb-2 font-normal text-gray-700 ">Total Bayar : Rp150.000</p>
      <p className="mb-2 font-normal text-gray-700 ">
        Status :{" "}
        <span className="bg-red-100 rounded-md p-1 text-xs text-red-700">
          Belum Terbayar
        </span>
      </p>
      <button className="inline-flex items-center px-3 py-2 mt-5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Bayar Sekarang
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
      </button>
    </div>
  );
};

export default CardUsagePay;
