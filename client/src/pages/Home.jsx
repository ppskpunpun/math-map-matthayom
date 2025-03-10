import herobg from '../assets/herobg.png'
import Main from '../components/Main'
import H2 from '../components/H2'
import P from '../components/P';
import { FaHouse, FaBookOpen, FaMapLocationDot, FaCircleQuestion, FaTrophy, FaDumbbell  } from 'react-icons/fa6';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

function Hero() {
  return (
    <section className="h-[256px] md:h-[512px] bg-gradient-to-b from-primary-500 to-pink-400 flex flex-col justify-center items-center px-2 py-8 gap-2 md:gap-4"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="md:text-5xl text-2xl text-gray-50">ยินดีต้อนรับเข้าสู่เว็บไซต์</h2>
      <h1 className="text-3xl md:text-6xl bg-gray-100 px-6 py-3 md:px-8 md:py-4 flex gap-4 font-bold rounded-xl shadow-md">
        <span className="text-primary-500">Math</span>
        <span className="text-accent-1">Map</span>
        <span className="text-secondary-500">Matthayom</span>
      </h1>
      <p className="text-gray-50 text-xs md:text-lg text-center">เว็บไซต์สำหรับ การเรียนการสอน ทบทวน ทำโจทย์ฝึกฝน ในวิชาคณิตศาสตร์ระดับชั้นมัธยมศึกษา โดยมีเนื้อหาอ้างอิงตามหลักสูตร สสวท.</p> 
    </section>
  )
}

function Card({children, title}) {
  return (
    <div className='bg-gray-50 rounded-xl flex flex-col items-center py-4'>
      { children }
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <div className='bg-secondary-500 py-8'>
        <Main>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <Card>
              <H2 className='text-slate-600 text-center'>บทเรียน</H2>
              <FaBookOpen className='text-slate-600' size='120' />
              <P className='w-[80%] text-center'>เราได้รวบรวมเนื้อหาคณิตศาสตร์ ตั้งแต่ ม.1-6 ไว้ให้หมดแล้ว โดยแยกไว้เป็นบทต่างๆ สามารถเลือกอ่านแต่ละบทได้ตามที่ต้องการ พร้อมระบบ interactive ต่างๆที่จะทำให้เข้าใจคณิตศาสตร์ได้ง่ายขึ้น</P>
              <Button variant='outline_secondary' onClick={() => navigate('/contents')}>Contents</Button>
            </Card>
            <Card>
              <H2 className='text-slate-600 text-center'>ผังมโนทัศน์</H2>
              <FaMapLocationDot className='text-slate-600' size='120' />
              <P className='w-[80%] text-center'>Roadmap ที่จะช่วยให้ผู้เรียนสามารเห็นภาพการเชื่อมโยงของหัวข้อต่างๆในวิชาคณิตศาสตร์ได้ง่ายขึ้น อ้างอิงตามตัวชี้วัด สาระการเรียนรู้ของ สสวท.</P>
              <Button variant='outline_secondary' onClick={() => navigate('/roadmap')}>Roadmap</Button>
            </Card>
            <Card>
              <H2 className='text-slate-600 text-center'>ทำโจทย์</H2>
              <FaDumbbell className='text-slate-600' size='120' />
              <P className='w-[80%] text-center'>ผู้เรียนสามารถเข้ามาทำโจทย์ต่างๆที่เราได้เตรียมไว้ เพื่อเป็นการฝึกฝนพัฒนาทักษะทางด้านคณิตศาสตร์ อีกทั้งผู้เรียนยังสามารถสร้างโจทย์ใหม่ ให้ผู้อื่นสามารถเข้ามาทำได้อีกด้วย</P>
              <Button variant='outline_secondary' onClick={() => navigate('/practice')}>Practice</Button>
            </Card>
          </div>
        </Main>
      </div>
    </div>
  )
}