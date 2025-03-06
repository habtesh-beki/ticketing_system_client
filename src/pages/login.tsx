import Header from "@/components/Header/HeaderBeforLogedIn";
import LoginForm from "@/components/LoginSIgnupForm/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <LoginForm />
    </div>
  );
}
