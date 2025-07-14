import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { PRACTICE_QUESTION_ROOT, SUBMIT_PRACTICE_QUESTION_URL } from '../config/apiConfig'

import Main from '../components/Main'
import SectionCard from '../components/SectionCard'
import H2 from '../components/H2'
import H3 from '../components/H3'
import Button from '../components/Button'
import InputField from '../components/InputField'
import ProgressPieChart from '../components/ProgressPieChart'

import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

function TableLeft({ children, className }) {
  return (
    <div className={`bg-gray-300 h-10 flex items-center px-4 ${className}`}>
      {children}
    </div>
  )
}

function TableRight({ children, className }) {
  return (
    <div className={`bg-gray-200 h-10 flex items-center px-4 ${className}`}>
      {children}
    </div>
  )
}

export default function DoPracticeQuestion() {
  const { username, title } = useParams()

  const [practiceQuestion, setPracticeQuestion] = useState(null)

  const [isStarted, setIsStarted] = useState(false)
  const [secondsElapsed, setSecondsElapsed] = useState(0)

  const [answers, setAnswers] = useState([])

  const [errorMsg, setErrorMsg] = useState('')

  const [isFinished, setIsFinished] = useState(false)

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-200 text-green-800'
      case 'medium': return 'bg-yellow-200 text-yellow-800'
      case 'hard': return 'bg-red-200 text-red-800'
      default: return 'bg-gray-200 text-gray-800'
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling
    });
  };

  const formatTime = (totalSeconds, type) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    if (type == 0) {
      return `${minutes}:${String(seconds).padStart(2, '0')}`
    } else {
      return `${(minutes > 0) ? minutes + ' นาที' : ''} ${seconds} วินาที`
    }
  }


  function onAnswerChange(e, i, type) {
    setAnswers(x => {
      const newAnswers = [ ...x ]

      if (type === 'written') {
        newAnswers[i] = e.target.value
      } else {
        newAnswers[i] = e.toString() // index as a string
      }

      return newAnswers
    })
  }

  function checkAnswer(i) {
    if (practiceQuestion.questions[i].type == 'written') {
      return (answers[i] == practiceQuestion.questions[i].correctAnswer) ? 1 : 0
    } else {
      return (answers[i] == practiceQuestion.questions[i].correctAnswerIndex) ? 1 : 0
    }
  }

  function getScore() {
    let score = 0

    for (let i=0; i<answers.length; i++) {
      score += checkAnswer(i)
    }

    return score
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(SUBMIT_PRACTICE_QUESTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        practiceQuestion: practiceQuestion._id,
        score: getScore(),
        answers,
        timer: secondsElapsed,
      }),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          setIsStarted(false)
          setIsFinished(true)
          scrollToTop()
          console.log(getScore())
        } else {
          setErrorMsg('ไม่สามารถส่งคำตอบได้')
        }
      })
      .catch((err) => {
        console.log(err)
        setErorMsg('มีบางอย่างผิดพลาด')
      });
  }

  useEffect(() => {
    fetch(`${PRACTICE_QUESTION_ROOT}/${username}/${title}`)
      .then(res => res.json())
      .then(data => { setPracticeQuestion(data.question); setAnswers(Array(data.question.questions.length)) })
  }, [])

  useEffect(() => {
    let timer
    if (isStarted) {
      timer = setInterval(() => {
        setSecondsElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isStarted])

  return (
    <Main>
      {isStarted && (
        <div className="fixed bottom-5 right-4 z-50 bg-white shadow-md px-4 py-2 rounded-lg text-slate-500 border-1 border-gray-200">
          ⏱️ {formatTime(secondsElapsed, 0)}
        </div>
      )}

      {practiceQuestion &&
        <SectionCard>
          <H2>{practiceQuestion.title}</H2>
          <div className='grid grid-cols-[1fr_3fr] rounded-md overflow-hidden text-slate-600 gap-y-0.5 mb-2'>
            <TableLeft>จัดทำโดย</TableLeft>
            <TableRight>{practiceQuestion.createdBy.username}</TableRight>
            <TableLeft>ระดับชั้น</TableLeft>
            <TableRight>มัธยมศึกษาปีที่ {practiceQuestion.grade}</TableRight>
            <TableLeft>ความยาก</TableLeft>
            <TableRight>
              <div className={`${getDifficultyClass(practiceQuestion.difficulty)} px-2 rounded-md`}>
                {practiceQuestion.difficulty.toUpperCase()}
              </div>
            </TableRight>
            <TableLeft>หมวดหมู่</TableLeft>
            <TableRight>{practiceQuestion.tags.toString()}</TableRight>
            <TableLeft>จำนวนคำถาม</TableLeft>
            <TableRight>{practiceQuestion.questions.length || 0}</TableRight>
            <TableLeft>แหล่งที่มา</TableLeft>
            <TableRight>{practiceQuestion.source || '-'}</TableRight>
          </div>
          {
            !isFinished &&
            <div className='flex justify-end'>
              <Button variant='outline_primary' onClick={() => setIsStarted(true)}>
                เริ่มทำ
              </Button>
            </div>
          }
        </SectionCard>
      }

      { isFinished &&
        <SectionCard className='mt-2'>
          <H2>ผลลัพท์</H2>
          <div className='flex justify-center'>
            <ProgressPieChart
              percentage={ ((getScore() / answers.length) * 100).toFixed(2) }
              color="#FF478A"
              size={255}
            />
          </div>
          <div className='mt-8 grid grid-cols-[1fr_3fr] rounded-md overflow-hidden text-slate-600 gap-y-0.5 mb-2'>
            <TableLeft>คะแนนที่ได้</TableLeft>
            <TableRight>{ `${getScore()} / ${answers.length}` }</TableRight>
            <TableLeft>เวลาทีใช้</TableLeft>
            <TableRight>{ formatTime(secondsElapsed, 1) }</TableRight>
          </div>
        </SectionCard>
      }

      {((isStarted || isFinished )&& practiceQuestion.questions) &&
        <form className='flex flex-col pt-2 gap-2' onSubmit={handleSubmit}>
          {
            practiceQuestion.questions.map((q, i) => (
              <SectionCard key={i} className={`flex flex-col gap-2`}>
                <p className='text-slate-700'>{i + 1}. { q.questionText }</p>
                { q.imageLink && <img className='max-h-screen max-w-full' src={q.imageLink} /> }
                { q.type === 'written'
                  ? (
                   <InputField disabled={isFinished}  onChange={(e) => onAnswerChange(e, i, 'written')} placeholder='กรอกคำตอบที่นี่' />
                  )
                  : (
                    q.choices.map((val, j) => (
                      <button key={j} onClick={() => onAnswerChange(j, i, 'multiple_choices')} type='button' disabled={isFinished} className={`${j == answers[i] ? 'bg-primary-400' : 'bg-gray-200' } px-4 py-2 text-slate-700 ${ !isFinished ? 'hover:bg-gray-300 hover:cursor-pointer active:scale-90' : '' }`}>
                        {val}
                      </button>
                    ))
                  )
                }
                { isFinished &&
                  <div className={`flex gap-4 items-center ${ checkAnswer(i) ? 'text-emerald-300' : 'text-red-300'}`}>
                    { checkAnswer(i) ? <FaRegCircleCheck className='text-5xl' /> : <RxCrossCircled className='text-5xl' /> }
                    <div className='text-lg'>
                      คำตอบที่ถูกต้องคือ
                      { " " }
                      {
                        practiceQuestion.questions[i].type == 'written'
                          ? practiceQuestion.questions[i].correctAnswer
                          : practiceQuestion.questions[i].choices[practiceQuestion.questions[i].correctAnswerIndex]
                      }
                    </div>
                  </div>
                }
              </SectionCard>
            ))
          }
          {
            !isFinished &&
            <Button type='submit' variant='outline_primary'>ส่งคำตอบ</Button>
          }
          { errorMsg != '' && <div className='text-red-400'>{ errorMsg }</div>}
        </form>
      }
    </Main>
  )
}
