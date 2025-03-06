import Footer from "@/components/Footer/FooterBeforeLogIn";
import Futures from "@/components/Futures/Futures";
import Header from "@/components/Header/HeaderBeforLogedIn";
import HeaderSecondary from "@/components/Header/HeaderSecondary";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-scroll">
      <Header />
      <HeaderSecondary />
      <Futures />
      <Footer />
    </div>
  );
}
