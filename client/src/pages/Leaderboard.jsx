import Main from "../components/Main"

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
  return (
    <Main>
      <h1 className="text-primary-500 text-4xl text-center mt-8 mb-4">Leaderboard</h1>
      <div className="flex flex-col gap-2 max-w-[500px] m-auto">
        <TopUser number={1} name={'admin'} score={9999999}/> 
        <TopUser number={2} name={'ppsk'} score={2500}/> 
        <TopUser number={3} name={'iamthebest'} score={2200}/> 
        <TopUser number={4} name={'mrSteve'} score={2150}/> 
        <TopUser number={5} name={'MathIsMyLife'} score={2000}/> 
        <TopUser number={6} name={'helloworld'} score={1800}/> 
        <TopUser number={7} name={'john1234'} score={1500}/> 
        <TopUser number={8} name={'WaNnAbeToP'} score={900}/> 
        <TopUser number={9} name={'username'} score={500}/> 
        <TopUser number={10} name={'eiei'} score={100}/> 
      </div>
    </Main>
  )
}