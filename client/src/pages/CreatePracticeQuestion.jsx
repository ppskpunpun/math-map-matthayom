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

export default function CreatePracticeQuestion() {
  const auth = useAuth()
  const navigate = useNavigate()

  const [ tagInputField, setTagInputField ] = useState('')

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

  function onLinkToSource(e) {
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

  function onTagRemove(tag) {
    setFormContent(content => {
      const tags = [ ...content.tags ].filter((x) => x != tag)
      return { ...content, tags: tags}
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(CREATE_PRACTICE_QUESTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formContent),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // verify if the question has been created
        } else {
          // failed to create the practice question
        }
      })
      .catch((err) => {
        setErrorMsg('Internal server error');
      });
  }

  return (
    <Main>
      <form className='flex'>
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
          <InputField onChange={onLinkToSource} className='w-full bg-slate-100' />
          <H3>หมวดหมู่</H3>
          <div className='flex gap-2'>
            <InputField value={tagInputField} onChange={(e) => setTagInputField(e.target.value)} className='bg-slate-100'></InputField>
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
                  <button onClick={() => onTagRemove(tag)} className='px-2 bg-blue-300 rounded-r-lg hover:cursor-pointer hover:font-bold'>x</button>
                </div>
              ))
            }
          </div>
        </SectionCard>
      </form>
    </Main>
  )
}
