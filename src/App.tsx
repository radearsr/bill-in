import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.component";
import BottomNavigation from "./components/bottom-navigation/bottom-navigation.component";
import History from "./pages/history.component";
import Chat from "./pages/chat.component";
import Account from "./pages/account.component";
import InvoiceDetails from "./pages/invoice.component";
import SignIn from "./pages/sign-in.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BottomNavigation />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="chat" element={<Chat />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="/invoice/:invoiceId" element={<InvoiceDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
