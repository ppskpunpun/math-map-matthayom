import Main from "../components/Main"

// # ชื่อ หมวดหมู่ ความยาก ชั้น สถานะ
const problems = [
  {
    title: 'บวกเลขง่ายๆ',
    tags: ['บวกเลข'],
    difficulty: 1,
    level: 1,
    score: 100,
    totalScore: 100,
  },
  {
    title: 'ลบเลขง่ายๆ',
    tags: ['ลบเลข'],
    difficulty: 1,
    level: 1,
    score: 100,
    totalScore: 100,
  },
  {
    title: 'คูณเลขเบื้องต้น',
    tags: ['คูณเลข'],
    difficulty: 2,
    level: 1,
    score: 90,
    totalScore: 120,
  },
  {
    title: 'หารเลขเบื้องต้น',
    tags: ['หารเลข'],
    difficulty: 2,
    level: 1,
    score: -1,
    totalScore: 120,
  },
  {
    title: 'ทศนิยมพื้นฐาน',
    tags: ['ทศนิยม'],
    difficulty: 2,
    level: 1,
    score: -1,
    totalScore: 130,
  },
  {
    title: 'เศษส่วนเบื้องต้น',
    tags: ['เศษส่วน'],
    difficulty: 2,
    level: 1,
    score: -1,
    totalScore: 130,
  },
  {
    title: 'เลขยกกำลังเบื้องต้น',
    tags: ['เลขยกกำลัง'],
    difficulty: 3,
    level: 1,
    score: -1,
    totalScore: 150,
  },
  {
    title: 'อัตราส่วนและสัดส่วน',
    tags: ['อัตราส่วน'],
    difficulty: 3,
    level: 1,
    score: 5,
    totalScore: 150,
  },
  {
    title: 'สมการเชิงเส้นตัวแปรเดียว',
    tags: ['สมการ'],
    difficulty: 3,
    level: 1,
    score: -1,
    totalScore: 150,
  },
  {
    title: 'กราฟและความสัมพันธ์เชิงเส้น',
    tags: ['กราฟ'],
    difficulty: 2,
    level: 1,
    score: -1,
    totalScore: 160,
  },
  {
    title: 'ความรู้เบื้องต้นเกี่ยวกับจำนวนจริง',
    tags: ['จำนวนจริง'],
    difficulty: 2,
    level: 2,
    score: -1,
    totalScore: 140,
  },
  {
    title: 'สมบัติเลขยกกำลัง',
    tags: ['เลขยกกำลัง'],
    difficulty: 3,
    level: 2,
    score: 20,
    totalScore: 150,
  },
  {
    title: 'พหุนามเบื้องต้น',
    tags: ['พหุนาม'],
    difficulty: 3,
    level: 2,
    score: -1,
    totalScore: 150,
  },
  {
    title: 'การแยกตัวประกอบพหุนาม',
    tags: ['พหุนาม', 'แยกตัวประกอบ'],
    difficulty: 3,
    level: 2,
    score: -1,
    totalScore: 150,
  },
  {
    title: 'สมการกำลังสอง',
    tags: ['สมการกำลังสอง'],
    difficulty: 2,
    level: 3,
    score: -1,
    totalScore: 160,
  },
  {
    title: 'กราฟของฟังก์ชันกำลังสอง',
    tags: ['กราฟ', 'ฟังก์ชัน'],
    difficulty: 1,
    level: 3,
    score: -1,
    totalScore: 170,
  },
  {
    title: 'ระบบสมการเชิงเส้นสองตัวแปร',
    tags: ['สมการ', 'ระบบสมการ'],
    difficulty: 1,
    level: 3,
    score: -1,
    totalScore: 170,
  },
  {
    title: 'ฟังก์ชันเอกซ์โพเนนเชียล',
    tags: ['ฟังก์ชัน', 'เอกซ์โพเนนเชียล'],
    difficulty: 3,
    level: 4,
    score: -1,
    totalScore: 180,
  },
  {
    title: 'เมทริกซ์พื้นฐาน',
    tags: ['เมทริกซ์'],
    difficulty: 1,
    level: 5,
    score: 190,
    totalScore: 190,
  },
  {
    title: 'ความน่าจะเป็น',
    tags: ['ความน่าจะเป็น'],
    difficulty: 3,
    level: 3,
    score: -1,
    totalScore: 180,
  },
];

function TT({ children }) {
  return (
    <div className="text-slate-500 text-sm">
      { children }
    </div>
  )
}

function TTI({ children} ) {
  return (
    <div className="text-slate-700 text-md">
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


function TableItem({ id, title, tags, difficulty, level, score, totalScore }) {
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
    <button className="grid grid-cols-[1fr_4fr_2fr_1fr_2fr] sm:grid-cols-[1fr_4fr_3fr_2fr_1fr_2fr] px-4 py-4 bg-gray-50 border border-gray-300 rounded-md hover:cursor-pointer hover:shadow-sm transition-all duration-200">
      <TTI>{id}</TTI>
      <TTI>{title}</TTI>
      <div className="hidden sm:flex flex-wrap gap-1 justify-center">
        {tags.map((tag, i) => (
          <span className="bg-gray-200 text-sm px-1 flex items-center rounded-sm text-slate-600 h-6">{ tag }</span> 
        ))} 
      </div>
      <TTI>
        <span className={`px-1 py-0.5 rounded text-sm ${getDifficultyClass(difficulty)}`}>
          {diffText}
        </span>
      </TTI>
      <TTI><span className="border-1 border-gray-400 text-sm p-1 text-gray-400">ม.{level}</span></TTI>
      <div>
        <span className={`text-sm ${ score === -1 ? 'text-slate-400' : 'text-green-500' }`}>
          {score === -1 ? 'ยังไม่ทำ' : `${score} / ${totalScore}`}
        </span>
      </div>
    </button>
  );
}

export default function Practice() {
  return (
    <Main>
      <h1 className="text-primary-500 text-4xl text-center mt-8">โจทย์ฝึกฝน</h1>
      <TableHead />
      <div className="flex flex-col gap-2">
        {problems.map((problem, index) => (
          <TableItem key={index} id={index + 1} {...problem} />
        ))}
      </div>
    </Main>
  )
}