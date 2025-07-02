import Button from "../components/Button"
import { CREATE_PRACTICE_QUESTION_URL } from '../config/apiConfig';

export default function CreatePracticeQuestion() {
  function handleSubmit(e) {
    e.preventDefault();

    fetch(CREATE_PRACTICE_QUESTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: "test",
        difficulty: "hard",
        grade: "6",
        tags: ['testfuck'],
        questions: [
          {
            type: 'written',
            questionText: 'what is the value of 69 + 56',
            correctAnswer: '70'
          },
          {
            type: 'multiple_choices',
            questionText: 'choice 4 is correct',
            choices: ['1', '2', '3', '4'],
            correctAnswerIndex: 4,
          },
        ],
      }),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // verify if the question have been created
        }
      })
      .catch((err) => {
        setErrorMsg('Internal server error');
      });
  }

  return (
    <div>
      <form>
        <Button variant='regular_primary' onClick={handleSubmit} type='submit'>Test create</Button>
      </form>
    </div>
  )
}
