import Header from "@/components/Header/HeaderBeforLogedIn";
import SignupForm from "@/components/LoginSIgnupForm/SignupForm";

export default function Signup() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <SignupForm />
    </div>
  );
}
