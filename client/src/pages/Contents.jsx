import { Link } from 'react-router'
import Banner from "../components/Banner"
import Main from '../components/Main'

function Title({ children }) {
  return (
    <h2 className='text-xl text-slate-800 mt-2'>{ children }</h2>
  )
}

function ChapterList({ children }) {
  return (
    <ul className='flex flex-col gap-4 mb-8'>
      { children }
    </ul>
  )
}

function Chapter({ children, to, color, level }) {
  // only highschool level topics will appear
  if (parseInt(level) < 4) {
    return (
      <></>
    )
  }

  const colors = {
    'blue': 'bg-blue-200 hover:bg-blue-300',
    'teal': 'bg-teal-200 hover:bg-teal-300',
    'green': 'bg-green-200 hover:bg-green-300',
    'purple': 'bg-purple-200 hover:bg-purple-300',
    'pink': 'bg-pink-200 hover:bg-pink-300',
    'yellow': 'bg-yellow-200 hover:bg-yellow-300',
    'orange': 'bg-orange-200 hover:bg-orange-300',
  }

  return (
    <li className='flex gap-2 items-center'>
      <div className='text-slate-400 border-1 border-slate-400 px-1 py-0.5 scale-80'>ม.{level}</div>
      <Link className={`${colors[color]} text-slate-700 underline rounded-lg px-2 py-1 transition-all duration-100`} to={to}>{ children }</Link>
    </li>
  )
}

export default function Contents() {
  return (
    <div>
      <Banner text="บทเรียนคณิตศาสตร์ ระดับชั้นมัธยมศึกษา" />
      <Main>
        <Title>ระบบจำนวน</Title>
        <ChapterList>
          <Chapter color='blue' to='/contents/number-system/integer-number' level='1'>จำนวนเต็ม</Chapter>
          <Chapter color='blue' to='/x' level='1'>ทศนิยมและเศษส่วน</Chapter>
          <Chapter color='blue' to='/x' level='1'>เลขยกกำลัง</Chapter>
          <Chapter color='blue' to='/x' level='1'>อัตราส่วน สัดส่วน และร้อยละ</Chapter>
          <Chapter color='blue' to='/x' level='2'>ความรู้เบื้องต้นเกี่ยวกับจำนวนจริง</Chapter>
          <Chapter color='blue' to='/x' level='2'>สมบัติเลขยกกำลัง</Chapter>
          <Chapter color='blue' to='/x' level='4'>เซต</Chapter>
          <Chapter color='blue' to='/x' level='4'>ตรรกศาสตร์</Chapter>
          <Chapter color='blue' to='/x' level='4'>จำนวนจริง</Chapter>
          <Chapter color='blue' to='/x' level='5'>จำนวนเชิงซ้อน</Chapter>
        </ChapterList>
        <Title>นิพจน์ สมการ และอสมการ</Title>
        <ChapterList>
          <Chapter color='teal' to='/x' level='1'>สมการเชิงเส้นตัวแปรเดียว</Chapter>
          <Chapter color='teal' to='/x' level='3'>อสมการเชิงเส้นตัวแปรเดียว</Chapter>
          <Chapter color='teal' to='/x' level='3'>สมการกำลังสองตัวแปรเดียว</Chapter>
          <Chapter color='teal' to='/x' level='3'>ระบบสมการเชิงเส้นสองตัวแปร</Chapter>
          <Chapter color='teal' to='/x' level='5'>เมทริกซ์</Chapter>
        </ChapterList>
        <Title>ความสัมพันธ์และฟังก์ชัน</Title>
        <ChapterList>
          <Chapter color='green' to='/x' level='1'>กราฟและความสัมพันธ์เชิงเส้น</Chapter>
          <Chapter color='green' to='/x' level='2'>พหุนาม</Chapter>
          <Chapter color='green' to='/x' level='2'>การแยกตัวประกอบพหุนามดีกรีสอง</Chapter>
          <Chapter color='green' to='/x' level='3'>การแยกตัวประกอบพหุนามที่มีดีกรีสูงกว่าสอง</Chapter>
          <Chapter color='green' to='/x' level='3'>กราฟของฟังก์ชั่นกำลังสอง</Chapter>
          <Chapter color='green' to='/x' level='4'>ความสัมพันธ์และฟังก์ชัน</Chapter>
          <Chapter color='green' to='/x' level='4'>ฟังก์ชันเอกซ์โพเนนเชียล และฟังก์ชั่นลอการิทึม</Chapter>
          <Chapter color='green' to='/x' level='5'>ฟังก์ชันตรีโกณมิติ</Chapter>
          <Chapter color='green' to='/x' level='6'>ลำดับและอนุกรม</Chapter>
        </ChapterList>
        <Title>เรขาคณิต</Title>
        <ChapterList>
          <Chapter color='purple' to='/x' level='1'>การสร้างเรขาคณิต</Chapter>
          <Chapter color='purple' to='/x' level='1'>รูปเรขาคณิตสองมิติและสามมิติ</Chapter>
          <Chapter color='purple' to='/x' level='2'>ทฤษฏีบทพีทาโกรัส</Chapter>
          <Chapter color='purple' to='/x' level='2'>การแปลงทางเรขาคณิต</Chapter>
          <Chapter color='purple' to='/x' level='2'>เส้นขนาน</Chapter>
          <Chapter color='purple' to='/x' level='2'>การให้เหตุผลทางเรขาคณิต</Chapter>
          <Chapter color='purple' to='/x' level='2'>ความเท่ากันทุกประการ</Chapter>
          <Chapter color='purple' to='/x' level='3'>วงกลม</Chapter>
          <Chapter color='purple' to='/x' level='3'>ความคล้าย</Chapter>
          <Chapter color='purple' to='/x' level='3'>อัตราส่วนตรีโกณมิติ</Chapter>
          <Chapter color='purple' to='/x' level='5'>เรขาคณิตวิเคราะห์</Chapter>
        </ChapterList>
        <Title>การวัดและคาดคะเนขนาด</Title>
        <ChapterList>
          <Chapter color='pink' to='/x' level='2'>ปริซึมและทรงกระบอก</Chapter>
          <Chapter color='pink' to='/x' level='3'>พีระมิด กรวย และทรงกลม</Chapter>
        </ChapterList>
        <Title>กระบวนการทางสติถิ</Title>
        <ChapterList>
          <Chapter color='yellow' to='/x' level='1'>สติถิ</Chapter>
          <Chapter color='yellow' to='/x' level='2'>สติถิ</Chapter>
          <Chapter color='yellow' to='/x' level='3'>สติถิ</Chapter>
          <Chapter color='yellow' to='/x' level='6'>ความหมายของสติถิศาสตร์และข้อมูล</Chapter>
          <Chapter color='yellow' to='/x' level='6'>การวิเคราะห์ข้อมูลเชิงคุณภาพ</Chapter>
          <Chapter color='yellow' to='/x' level='6'>ตัวแปรสุ่มและการแจกแจงความน่าจะเป็น</Chapter>
        </ChapterList>
        <Title>หลักการนับ</Title>
        <ChapterList>
          <Chapter color='orange' to='/x' level='5'>หลักการนับเบื้องต้น</Chapter>
          <Chapter color='orange' to='/x' level='3-5'>ความน่าจะเป็น</Chapter>
        </ChapterList>
      </Main>
    </div>
  )
}
