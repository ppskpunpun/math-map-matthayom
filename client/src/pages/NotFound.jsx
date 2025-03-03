import { TbMathAvg } from "react-icons/tb";
import Button from "../components/Button";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center gap-8 text-slate-700">
        <TbMathAvg className="text-[100px]" />
        <h1 className="text-3xl sm:text-5xl text-center">สมการยังไม่พบคำตอบ <br/> อยู่ระหว่างการแก้ระบบสมการ</h1> 
        <Button onClick={() => { navigate('/') }} variant="outline_primary">กลับหน้าหลัก</Button> 
    </div>
  )
}