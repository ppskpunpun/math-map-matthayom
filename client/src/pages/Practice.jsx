import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../provider/authProvider'
import Main from "../components/Main"
import Button from "../components/Button"
import { GET_ALL_PRACTICE_QUESTION_URL, GET_BEST_SUBMIT_PRACTICE_QUESTION_URL, DELETE_PRACTICE_QUESTION_URL } from '../config/apiConfig'
import { FaRegCircleCheck } from "react-icons/fa6";

function TT({ children }) {
  return (
    <div className="text-slate-500 text-sm">
      { children }
    </div>
  )
}

function TTI({ children} ) {
  return (
    <div className="text-slate-700 text-md flex items-center justify-center">
      { children }
    </div>
  )
}

function TableHead() {
  return (
    <div className="grid grid-cols-[1fr_4fr_2fr_1fr_2fr] sm:grid-cols-[1fr_4fr_3fr_2fr_1fr_2fr] mt-4 border-b-2 border-slate-200 py-2 mb-2 px-4 text-center">
      <TT>#</TT>
      <TT>ชื่อ</TT>
      <div className="hidden sm:block">
        <TT>หมวดหมู่</TT>
      </div>
      <TT>ความยาก</TT>
      <TT>ชั้น</TT>
      <TT>สถานะ</TT>
    </div>
  )
}


function TableItem({ onClick, id, title, tags, difficulty, level, score, totalScore, owner }) {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 1: return 'bg-green-200 text-green-800';
      case 2: return 'bg-yellow-200 text-yellow-800';
      case 3: return 'bg-red-200 text-red-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  let diffText = '';
  if (difficulty == 1) diffText = 'Easy';
  else if (difficulty == 2) diffText = 'Medium';
  else if (difficulty == 3) diffText = 'Hard';

  return (
    <button onClick={onClick} className="grid grid-cols-[1fr_4fr_2fr_1fr_2fr] sm:grid-cols-[1fr_4fr_3fr_2fr_1fr_2fr] px-4 py-4 bg-gray-50 border border-gray-300 rounded-md hover:cursor-pointer hover:shadow-sm transition-all duration-200 w-full">
      <TTI>{id}</TTI>
      <TTI>
        <div className='flex justify-center items-center flex-col'>
          <p>{title}</p>
          { owner == 'admin'
            ? <p className='text-[0.75rem] text-green-600 flex gap-1 items-center'><FaRegCircleCheck /> Math Map Matthayom</p>
            : <p className='text-[0.75rem] text-slate-400'>by {owner}</p>
          }
        </div>
      </TTI>
      <div className="hidden sm:flex flex-wrap gap-1 justify-center">
        <TTI>
          <div className='flex gap-2 flex-wrap'>
            {tags.map((tag, i) => (
              <span key={i} className="bg-gray-200 text-sm px-1 flex items-center rounded-sm text-slate-600 h-6 text-nowrap">{ tag }</span>
            ))}
          </div>
        </TTI>
      </div>
      <TTI>
        <span className={`px-1 py-0.5 rounded text-sm ${getDifficultyClass(difficulty)}`}>
          {diffText}
        </span>
      </TTI>
      <TTI><span className="border-1 border-gray-400 text-sm p-1 text-gray-400">ม.{level}</span></TTI>
      <TTI>
        <span className={`text-sm ${ score === -1 ? 'text-slate-400' : (score / totalScore >= 0.8 ? 'text-green-400' : 'text-red-400') }`}>
          {score === -1 ? 'ยังไม่ทำ' : `${score} / ${totalScore}`}
        </span>
      </TTI>
    </button>
  );
}

export default function Practice() {
  const navigate = useNavigate()
  const [problems, setProblems] = useState([]);
  const [submits, setSubmits] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false)
  const auth = useAuth()

  const difficultyTextToNumber = (x) => {
    if (x == 'easy') return 1;
    if (x == 'medium') return 2;
    if (x == 'hard') return 3;
  }

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

  function getScoreOfQuestion(questionID) {
    const q = submits.find((s) => s.practiceQuestion == questionID)

    if (q) {
      return q.score
    } else {
      return -1
    }
  }

  function handleDelete(id) {
    fetch(DELETE_PRACTICE_QUESTION_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: auth.token, questionId: id }),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.success) {
          setProblems(p => {
            return p.filter((val) => val._id != id)
          })
        } else {
          console.log('can not delete the question')
        }
    })
  }

  return (
    <Main>
      <h1 className="text-primary-500 text-4xl text-center mt-8">โจทย์ฝึกฝน</h1>
      <TableHead />
      {
        auth.isLogin &&
        <button onClick={() => navigate('/create-practice-question')} className="text-slate-500 bg-gray-100 hover:bg-primary-400 p-2 w-full mb-2 rounded-md hover:cursor-pointer hover:shadow-sm transition-all duration-200">
          เพิ่มโจทย์ฝึกฝน
        </button>
      }
      { auth.isAdmin && <Button onClick={() => setDeleteToggle(prev => !prev)} variant='outline_secondary' className='mb-3 w-full'>Admin</Button>}
      <div className="flex flex-col gap-2">
        {problems && problems.map((problem, index) => (
          <div key={problem._id} className='w-full flex gap-2'>
            <TableItem
              id={index + 1}
              title={problem.title}
              owner={problem.createdBy.username}
              tags={problem.tags}
              difficulty={difficultyTextToNumber(problem.difficulty)}
              level={problem.grade}
              score={ getScoreOfQuestion(problem._id) }
              totalScore={problem.questions.length}
              onClick={() => navigate(`/practice/${problem.createdBy.username}/${problem.title}`) }
            />
            { deleteToggle && <Button onClick={() => handleDelete(problem._id)} variant='outline_primary'>Delete</Button> }
          </div>
        ))}
      </div>
    </Main>
  )
}
