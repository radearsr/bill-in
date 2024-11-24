import CardUsage from "@components/card-usage/card-usage.component";
import CardUsagePay from "@/components/card-usage-pay/card-usage-pay.component";

const Home = () => {
  return (
    <div className="px-4 pb-20 min-h-fit bg-white">
      <h1 className="text-3xl font-bold">Billin</h1>
      <h2 className="text-xl font-semibold pt-3">Selamat Datang</h2>
      <h2 className="text-xl font-semibold">Megumi Chann Kawaii</h2>
      <CardUsage />
      <CardUsage />
      <CardUsage />
      <CardUsagePay />
    </div>
  );
};

export default Home;
