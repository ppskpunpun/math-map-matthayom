import { useEffect, useState } from 'react'
import { useAuth } from '../provider/authProvider';
import { GET_ALL_PRACTICE_QUESTION_URL, GET_BEST_SUBMIT_PRACTICE_QUESTION_URL } from '../config/apiConfig'
import Main from "../components/Main"
import SectionCard from '../components/SectionCard';
import ProgressPieChart from '../components/ProgressPieChart'
import H2 from '../components/H2';

const allTopics = [
  'เซต',
  'ตรรกศาสตร์',
  'จำนวนจริง',
  'ความสัมพันธ์และฟังก์ชัน',
  'ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม',
  'เรขาคณิตวิเคราะห์',
  'ฟังก์ชันตรีโกณมิติ',
  'เมทริกซ์',
  'จำนวนเชิงซ้อน',
  'หลักการนับเบื้องต้น',
  'ความน่าจะเป็น',
  'ลำดับและอนุกรม',
  'แคลคูลัสเบื้องต้น',
  'ความหมายของสติถิศาสตร์และข้อมูล',
  'การวิเคราะห์และนำเสนอข้อมูลเชิงคุณภาพ',
  'การวิเคราะห์และนำเสนอข้อมูลเชิงปริมาณ',
  'ตัวแปรสุ่มและการแจกแจงความน่าจะเป็น',
];

function Field({ title, data }) {
  return (
    <div className='flex items-center text-md text-slate-600'>
      <div className='bg-primary-400 px-4 py-2'>{ title }</div>
      <div className='bg-gray-200 px-4 py-2 grow'>{ data }</div>
    </div>
  )
}


function Progress({ title, current, total }) {
  return (
    <SectionCard className='flex flex-col justify-center items-center'>
      <div className='text-lg text-slate-500 text-center'>{ title }</div>
      <ProgressPieChart percentage={ (current / total * 100).toFixed(2)  } color='#8AC7FF' />
      <div className='text-md text-slate-500'>{ current } {'/'} { total }</div>
    </SectionCard>
  )
}

export default function Profile() {
  const [problems, setProblems] = useState([]);
  const [submits, setSubmits] = useState([]);
  const auth = useAuth()

  useEffect(() => {
    fetch(GET_ALL_PRACTICE_QUESTION_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          setProblems(data.practiceQuestion)
        }
      })
  }, [])

  useEffect(() => {
    if (auth.isLogin) {
      fetch(GET_BEST_SUBMIT_PRACTICE_QUESTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: auth.token }),
      })
        .then((res) => res.json())
        .then((data) => setSubmits(data.submits))
    }
  }, [auth.isLogin])

  function getProgress(topic) {
    let total = 0
    let current = 0

    problems.forEach(x => {
      if (x.tags.includes(topic)) {
        total += 1
      }
    })

    submits.forEach(x => {
      const id = x.practiceQuestion
      problems.forEach(y => {
        if (y._id == id && y.tags.includes(topic)) {
            current += 1
        }
      })
    })

    return { current, total }
  }

  if (!auth.isLogin) return (
    <div></div>
  )

  return (
    <Main className='flex flex-col gap-2'>
      <SectionCard>
        <H2>{ auth.userData.username }</H2>
        <div className='flex flex-col gap-2'>
          <Field title="ชื่อ" data={auth.userData.name} />
          <Field title="วันเกิด" data={auth.userData.birthday} />
          <Field title="สร้างเมื่อ" data={auth.userData.createdAt.slice(0, 10)} />
        </div>
      </SectionCard>
      <SectionCard>
        <H2>Practice Progress</H2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          { allTopics.map(topic => {
            const x = getProgress(topic)
            return <Progress key={topic} title={topic} current={x.current} total={x.total} />
          })}
        </div>
      </SectionCard>
    </Main>
  )
}
