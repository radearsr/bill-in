import { useNavigate } from "react-router-dom";

const PaymentHistoryItem = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/invoice/12345");
  };
  return (
    <div className="border-b-2 mt-2 py-2" onClick={handleOnClick}>
      <p>20 November 2024</p>
      <p>
        Jumlah: Rp150.000 - Status:{" "}
        <span className="bg-green-100 rounded-md p-1 text-xs text-green-700">
          Terbayar
        </span>
      </p>
    </div>
  );
};

export default PaymentHistoryItem;
