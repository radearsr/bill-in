import PaymentReceipt from "@/components/payment-receipt/payment-receipt.component";
import { useNavigate } from "react-router-dom";

const InvoiceDetails = () => {
  const navigate = useNavigate();
  const handleOnClickBack = () => {
    navigate("/history");
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-between w-full md:w-[28rem] min-h-screen max-h-screen shadow">
        <h1 className="p-2 text-center text-3xl">Invoice Pembayaran</h1>
        <PaymentReceipt />
        <div className="flex justify-between w-full p-2 border-t-2">
          <button
            className="w-5/12 p-3 rounded-md border-2 border-gray-400 text-gray-500 hover:bg-gray-500 hover:text-white"
            onClick={handleOnClickBack}
          >
            Kembali
          </button>
          <button className="w-5/12 p-3 rounded-md border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Cetak
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
