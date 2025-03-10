import cedt from '../assets/cedt.jpg'
import Main from "../components/Main"
import H2 from "../components/H2"
import P from "../components/P"

export default function About() {
  return (
    <Main>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(300px,25%)]">
        <div>
          <H2>Our Story</H2> 
          <P>ผู้พัฒนาเคยเรียนคณิตศาสตร์แต่พบว่าบางหัวข้อยังเข้าใจได้ไม่ดีนัก เนื่องจากขาดพื้นฐานในบางเรื่อง แม้จะเคยเรียนมาแล้วก็ตาม เมื่อย้อนกลับไปทบทวน ก็มักเจอปัญหาว่าไม่รู้ว่าควรเริ่มศึกษาหัวข้อใดก่อน-หลัง ส่งผลให้ต้องย้อนกลับไปกลับมา ทำให้เสียเวลามากในการทำความเข้าใจแต่ละเรื่อง</P>
          <P>นอกจากนี้ ผู้พัฒนาเคยสอนคณิตศาสตร์ให้เพื่อนในห้องเรียน และพบว่าเพื่อนบางคนมีปัญหาเช่นเดียวกัน กล่าวคือ ไม่เข้าใจเนื้อหาพื้นฐานที่เคยเรียนไปแล้ว ทำให้ต้องย้อนกลับไปอธิบายใหม่ ส่งผลให้การสอนเนื้อหาหลักที่ตั้งใจไว้ดำเนินไปได้ช้ากว่าที่ควร</P>
          <P>ดังนั้น ควรมีแนวทางที่ช่วยให้การทบทวนและการเรียนคณิตศาสตร์มีโครงสร้างที่ชัดเจนขึ้น เช่น การจัดลำดับเนื้อหาให้เหมาะสม หรือใช้แนวคิดแบบแผนผัง roadmap เพื่อช่วยให้ทั้งผู้เรียนและผู้สอนสามารถติดตามความเข้าใจของตนเองได้ง่ายขึ้น และลดปัญหาการย้อนกลับไปมาในการศึกษา</P>
        </div>
        <div className="grid place-items-center p-10">
          <img className='max-w-[300px] w-full' src='https://cdn.pixabay.com/photo/2012/04/11/16/17/thinker-28741_1280.png' /> 
        </div>
      </div>
      <div className="grid grid-cols-1">
        <H2>Journeys</H2> 
        <div className='py-2 px-8 border-2 border-slate-200'>
          <div className='flex gap-8 items-center'>
            <img className='w-[80px] rounded-full shadow-md' src={cedt} />
            <P mb=''>เว็บไซต์นี้เริ่มจัดทำขึ้น เพื่อส่งเข้าแข่งขันในงาน <b>CEDT INNOVATION SUMMIT 2025</b></P>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <H2>Project Presentation</H2>
        <a href='https://www.canva.com/design/DAGhCrG5e64/zor4cbzk18nVtk1yPthlEw/view?utm_content=DAGhCrG5e64&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h34d6f49fd3#6' className='text-blue-400 underline'>View Canva Presentation</a>
      </div>
    </Main>
  )
}