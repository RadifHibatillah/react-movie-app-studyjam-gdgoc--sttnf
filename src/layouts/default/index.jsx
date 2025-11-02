import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-slate-700 via-slate-800 to-slate-700">
      <Header />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
