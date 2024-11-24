import PaymentHistoryItem from "@/components/payment-history-item/payment-history-item.component";

const History = () => {
  return (
    <div className="pb-15 px-2">
      <h1 className="text-2xl font-bold sticky top-0 py-4 bg-white">
        Riwayat Pembayaran
      </h1>
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
      <PaymentHistoryItem />
    </div>
  );
};

export default History;
