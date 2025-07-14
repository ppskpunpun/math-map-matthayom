import { useState, useEffect } from 'react'
import Main from "../components/Main"
import { GET_TOP_USERS } from "../config/apiConfig";

function TopUser({ number, name, score }) {
  let topClass = 'bg-gray-50 border-2 border-slate-300 text-slate-600';
  if (number == 3) topClass = 'bg-yellow-50 border-2 border-yellow-300 text-yellow-600';
  else if (number == 2) topClass = 'bg-orange-50 border-2 border-orange-300 text-orange-600';
  else if (number == 1) topClass = 'bg-red-50 border-2 border-red-300 text-red-600';

  return (
    <div className="flex gap-1">
      <div className={`px-4 py-2 ${topClass}`}>
        NO.{ number }
      </div>
      <div className={`px-4 py-2 grow ${topClass}`}>
        { name }
      </div>
      <div className={`px-4 py-2 ${topClass}`}>
        { score }
      </div>
    </div>
  )
}

export default function() {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    fetch(GET_TOP_USERS)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLeaderboard(data.leaderboard)
        }
      })
  }, [])

  return (
    <Main>
      <h1 className="text-primary-500 text-4xl text-center mt-8 mb-4">Leaderboard</h1>
      <div className="flex flex-col gap-2 max-w-[500px] m-auto">
        { leaderboard.length > 0
          ? leaderboard.map((val, i) => <TopUser key={val.username} number={i + 1} score={val.totalScore} name={val.username} />)
          : (
            <>
              <TopUser number={1} score={1000} name='User 1' />
              <TopUser number={2} score={500} name='User 2' />
              <TopUser number={3} score={250} name='User 3' />
              <TopUser number={4} score={125} name='User 4' />
              <TopUser number={5} score={62} name='User 5' />
              <TopUser number={6} score={31} name='User 6' />
              <TopUser number={7} score={15} name='User 7' />
              <TopUser number={8} score={7} name='User 8' />
              <TopUser number={9} score={3} name='User 9' />
              <TopUser number={10} score={1} name='User 10' />
            </>
          )
        }
      </div>
    </Main>
  )
}
