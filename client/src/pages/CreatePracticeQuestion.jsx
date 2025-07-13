import { useEffect, useState, useRef } from "react";
import { useAuth } from '../provider/authProvider'
import { useNavigate } from "react-router";
import { CREATE_PRACTICE_QUESTION_URL } from '../config/apiConfig';

import Button from "../components/Button"
import Main from "../components/Main";
import InputField from '../components/InputField'
import SectionCard from '../components/SectionCard'
import Select from '../components/Select'
import H2 from '../components/H2'
import H3 from '../components/H3'

import { FaRegCheckCircle } from "react-icons/fa";

import { toThai } from "../utils";

const allTopics = [
  'ระบบจำนวน',
  'เซต',
  'ตรรกศาสตร์',
  'จำนวนจริง',
  'จำนวนเชิงซ้อน',
  'เมทริกซ์',
  'ความสัมพันธ์และฟังก์ชัน',
  'ฟังก์ชันเอกซ์โพเนนเชียล และฟังก์ชั่นลอการิทึม',
  'ฟังก์ชันตรีโกณมิติ',
  'ลำดับและอนุกรม',
  'เรขาคณิตวิเคราะห์',
  'ความหมายของสถิติศาสตร์และข้อมูล',
  'การวิเคราะห์ข้อมูลเชิงคุณภาพ',
  'ตัวแปรสุ่มและการแจกแจงความน่าจะเป็น',
  'หลักการนับเบื้องต้น'
];

export default function CreatePracticeQuestion() {
  const auth = useAuth()
  const navigate = useNavigate()

  const [ tagInputField, setTagInputField ] = useState('')
  const [ errorMsg, setErrorMsg ] = useState('')
  const [ isFinished, setIsFinished ] = useState(false)

  const [ formContent, setFormContent ] = useState({
    title: '',
    grade: 4,
    difficulty: 'easy',
    source: '',
    linkToSource: '',
    tags: [],
    questions: []
  })

  function onTitleChange(e) {
    setFormContent(content => ({ ...content, title: e.target.value }))
  }

  function onGradeChange(e) {
    let grade = 4;
    if (e.target.value == 'ม.4') grade = 4
    else if (e.target.value == 'ม.5') grade = 5
    else  if( e.target.value == 'ม.6') grade = 6

    setFormContent(content => ({ ...content, grade: grade }))
  }

  function onDifficultyChange(e) {
    setFormContent(content => ({ ...content, difficulty: e.target.value.toLowerCase() }))
  }

  function onSourceChange(e) {
    if (e.target.value) {
      setFormContent(content => ({ ...content, source: e.target.value }))
    }
  }

  function onLinkToSourceChange(e) {
    if (e.target.value) {
      setFormContent(content => ({ ...content, linkToSource: e.target.value }))
    }
  }

  function handleAddTag() {
    const isDuplicated = formContent.tags.find((x) => x == tagInputField)

    if (tagInputField == '' || isDuplicated) {
      return
    }

    setFormContent((content) => {
      const tags = [ ...content.tags ]
      tags.push(tagInputField)
      setTagInputField('')
      return { ...content, tags: tags }
    })
  }

  function handleTagRemove(tag) {
    setFormContent(content => {
      const tags = [ ...content.tags ].filter((x) => x != tag)
      return { ...content, tags: tags}
    })
  }

  function handleAddQuestion() {
    setFormContent(content => {
      const questions = [ ...content.questions ]
      questions.push({
        type: 'multiple_choices',
        questionText: '',
        imageLink: '',
        choices: [],
        correctAnswerIndex: 0,
        // for written
        correctAnswer: '',
      })
      return { ...content, questions: questions }
    })
  }

  function onQuestionTextChange(e, index) {
    setFormContent(content => {
      const questions = [ ...content.questions ]

      questions[index].questionText = e.target.value

      return { ...content, questions: questions }
    })
  }

  function onQuestionTypeChange(e, index) {
    setFormContent(content => {
      const questions = [ ...content.questions ]
      const type = (e.target.value === 'ตัวเลือก') ? 'multiple_choices' : 'written'

      questions[index].type = type

      return { ...content, questions: questions }
    })
  }

  function onImageLinkChange(e, index) {
    setFormContent(content => {
      const questions = [ ...content.questions ]

      questions[index].imageLink = e.target.value

      return { ...content, questions: questions }
    })
  }

  function onCorrectAnswerChange(e, index) {
    setFormContent(content => {
      const questions = [ ...content.questions ]

      questions[index].correctAnswer = e.target.value

      return { ...content, questions: questions }
    })
  }

  function onNumberOfChoicesChange(e, index) {
    setFormContent(content => {
      const questions = [ ...content.questions ]

      questions[index].choices = Array(parseInt(e.target.value)).fill('')

      return { ...content, questions: questions }
    })
  }

  function onChoiceChange(e, i, j) {
    setFormContent(content => {
      const questions = [ ...content.questions ]

      questions[i].choices[j] = e.target.value

      return { ...content, questions: questions }
    })
  }

  function onCorrectChoiceChange(e, i) {
    setFormContent(content => {
      const questions = [ ...content.questions ]

      questions[i].correctAnswerIndex = parseInt(e.target.value) - 1

      return { ...content, questions: questions }
    })
  }

  function handleRemoveQuestion(i) {
    setFormContent(content => {
      const questions = content.questions.filter((v, index) => (index != i))

      return { ...content, questions: questions }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    // verify and format the formContent
    const httpPostContent = { ...formContent }
    let flag = false

    const questions = httpPostContent.questions.map(q => {
      const newQ = { ...q }

      if (q.type == 'written') {
        delete newQ.choices
        delete newQ.correctAnswerIndex
      } else {
        delete newQ.correctAnswer
        if (q.choices.length <= q.correctAnswerIndex) {
          flag = true
          setErrorMsg('มีบางอย่างผิดพลาด โปรดตรวจสอบความถูกต้องเรียบร้อย')
        }
      }

      return newQ
    })

    if (flag) return

    httpPostContent.questions = questions
    console.log(httpPostContent)

    fetch(CREATE_PRACTICE_QUESTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(httpPostContent),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          // verify if the question has been created
          console.log('succesfully create practice question')
          setIsFinished(true)
        } else {
          // failed to create the practice question
          console.log('failed to create practice question')

          if (data.message) {
            setErrorMsg(toThai(data.message))
          } else {
            setErrorMsg('ไม่สามารถสร้างโจทย์ได้')
          }
        }
      })
      .catch((err) => {
        setErrorMsg('Internal server error');
      });
  }

  return (
    <Main>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <SectionCard>
          <H3>ชื่อโจทย์</H3>
          <InputField onChange={onTitleChange} className='w-full bg-slate-100' />
          <div className='grid grid-cols-2'>
            <div>
              <H3>ระดับชั้น</H3>
              <Select onChange={onGradeChange} options={['ม.4', 'ม.5', 'ม.6']} defaultIdx={0} />
            </div>
            <div>
              <H3>ความยาก</H3>
              <Select onChange={onDifficultyChange} options={['Easy', 'Medium', 'Hard']} defaultIdx={0} />
            </div>
          </div>
          <H3>แหล่งที่มา (Optional)</H3>
          <InputField onChange={onSourceChange} className='w-full bg-slate-100' />
          <H3>ลิงค์อ้างอิง (Optional)</H3>
          <InputField onChange={onLinkToSourceChange} className='w-full bg-slate-100' />
          <H3>หมวดหมู่</H3>
          <div className='flex gap-2'>
            <Select onChange={ (e) => setTagInputField(e.target.value) } options={allTopics} defaultIdx={0} />
            <button type='button' onClick={handleAddTag} className='bg-secondary-500 aspect-square w-10 text-xl text-slate-50 hover:cursor-pointer active:bg-seondary-400 transition-all duration-200'>+</button>
          </div>
          <div className='flex gap-4 mt-4 flex-wrap'>
            {
              formContent.tags.map((tag) => (
                <div key={tag} className='flex'>
                  <span
                    className="bg-blue-200 text-md px-6 flex items-center text-slate-600 gap-2 rounded-l-lg"
                  >
                    { tag }
                  </span>
                  <button type='button' onClick={() => handleTagRemove(tag)} className='px-2 bg-blue-300 rounded-r-lg hover:cursor-pointer hover:font-bold'>x</button>
                </div>
              ))
            }
          </div>
        </SectionCard>
        {
          formContent.questions.map((q, i) =>(
            <SectionCard key={i}>
              <H2>ข้อที่ {i + 1}</H2>
              <H3>โจทย์</H3>
              <InputField onChange={(e) => onQuestionTextChange(e, i)} className='w-full bg-slate-100' />
              <H3>ลิงค์รูปภาพ (Optional)</H3>
              <InputField onChange={(e) => onImageLinkChange(e, i)} className='w-full bg-slate-100' />
              <H3>ประเภท</H3>
              <Select onChange={(e) => onQuestionTypeChange(e, i) } options={['ตัวเลือก', 'เติมคำตอบ']} defaultIdx={0} />
              {
                q.type === 'written'
                  ? (
                    <>
                      <H3>คำตอบ</H3>
                      <InputField onChange={(e) => onCorrectAnswerChange(e, i)} className='w-full bg-slate-100' />
                    </>
                  )
                  : (
                    <>
                      <H3>จำนวนตัวเลือก</H3>
                      <Select onChange={(e) => onNumberOfChoicesChange(e, i) } options={[1,2,3,4,5,6]} defaultIdx={0} />
                      <H3>ข้อที่ถูก</H3>
                      <Select onChange={(e) => onCorrectChoiceChange(e, i) } options={ q.choices.map((v, i) => i + 1) } defaultIdx={0} />
                      <H3>ตัวเลือก</H3>
                      <div className='flex flex-col gap-1'>
                        { q.choices.map((val, j) => (
                          <div key={j} className='flex'>
                            <div className='bg-gray-200 grid place-items-center px-6 text-slate-600'>{ j + 1 }</div>
                            <InputField value={q.choices[j]} onChange={(e) => onChoiceChange(e, i, j)} className='w-full bg-slate-100' />
                          </div>
                        ))}
                      </div>
                    </>
                  )
              }
              <div className='mt-4 flex justify-end'>
                <Button onClick={() => handleRemoveQuestion(i)} variant='outline_secondary'>ลบโจทย์</Button>
              </div>
            </SectionCard>
          ))
        }
        <button type='button' onClick={handleAddQuestion} className="text-slate-500 bg-gray-100 hover:bg-primary-400 p-2 w-full mb-2 rounded-md hover:cursor-pointer hover:shadow-sm transition-all duration-200">
          เพิ่มคำถาม
        </button>
        <div className='flex justify-center gap-2 items-center flex-col'>
          <Button type='submit' variant='regular_primary'>สร้างโจทย์</Button>
          <div className='text-red-400'>{ errorMsg }</div>
        </div>
      </form>
      {
        isFinished &&
          <div className='fixed top-0 left-0 w-screen h-screen z-100 bg-gray-500/50 grid place-items-center'>
            <div className='bg-gray-50 rounded-md w-[25%] aspect-square p-4 flex flex-col gap-4 justify-center items-center'>
              <FaRegCheckCircle className='text-green-500 text-[50px]' />
              <p className='text-green-500'>สร้างโจทย์สำเร็จ</p>
              <Button onClick={() => { navigate('/practice') }} variant="outline_primary" className='mt-4'>กลับหน้าโจทย์</Button>
            </div>
          </div>
      }
    </Main>
  )
}
