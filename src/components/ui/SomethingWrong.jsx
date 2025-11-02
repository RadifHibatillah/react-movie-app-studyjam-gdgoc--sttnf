import { useNavigate } from "react-router-dom";

export default function SomethingWrong() {
  const navigate = useNavigate;
  return (
    <div className="col-span-full text-center flex flex-col items-center">
      <p className="text-slate-400 font-medium text-xl">Ada yang salah nih dari websitenya, silakan coba lagi nanti ya.. 😢</p>
    </div>
  );
}
