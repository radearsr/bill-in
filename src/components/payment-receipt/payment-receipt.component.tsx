const PaymentReceipt = () => {
  // Data struk sebagai contoh
  const receiptData = {
    organization: "Billing Internet Kuhh",
    address: "Desa Desu, 3 Chome-196 Kashiharacho Tokyo Jepang",
    phone: "+62821-3890-9862",
    customer: "Mashiroo Funaao",
    package: "5 Mbps",
    transactionId: "202408271",
    month: "November 2024",
    paymentDate: "26/11/2024",
    amount: 120000,
  };

  return (
    <div className="w-full bg-white p-4 border border-gray-300">
      <h1 className="text-center text-lg font-bold">Struk Pembayaran WIFI</h1>
      <p className="text-center text-sm">{receiptData.organization}</p>
      <p className="text-center text-sm">{receiptData.address}</p>
      <p className="text-center text-sm">Telp. {receiptData.phone}</p>

      <hr className="mt-4 border-t-2 border-dashed border-gray-300" />
      <hr className="mb-4 mt-2 border-t-2 border-dashed border-gray-300" />

      <table className="w-full text-sm text-left">
        <tr>
          <td className="font-bold">Pelanggan</td>
          <td>: {receiptData.customer}</td>
        </tr>
        <tr>
          <td className="font-bold">Paket Bandwidth</td>
          <td>: {receiptData.package}</td>
        </tr>
        <tr>
          <td className="font-bold">ID Transaksi</td>
          <td>: {receiptData.transactionId}</td>
        </tr>
      </table>

      <hr className="mt-4 border-t-2 border-dashed border-gray-300" />
      <hr className="mb-4 mt-2 border-t-2 border-dashed border-gray-300" />

      <table className="w-full text-sm text-left">
        <thead>
          <tr>
            <th className="font-bold">Bulan / Tahun</th>
            <th className="font-bold">Tanggal Bayar</th>
            <th className="font-bold text-right">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{receiptData.month}</td>
            <td>{receiptData.paymentDate}</td>
            <td className="text-right">
              {receiptData.amount.toLocaleString("id-ID")}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2} className="font-bold text-right">
              Total
            </td>
            <td className="font-bold text-right">
              Rp. {receiptData.amount.toLocaleString("id-ID")}
            </td>
          </tr>
        </tfoot>
      </table>

      <p className="mt-4 text-center text-sm">
        Terima kasih telah melakukan pembayaran.
      </p>
    </div>
  );
};

export default PaymentReceipt;
