import { useRef } from 'react'
import Main from "../../../components/Main"
import Banner from "../../../components/Banner"
import H2 from "../../../components/H2"
import H3 from '../../../components/H3'
import P from '../../../components/P'
import TOC from "../../../components/TOC"
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

import trig1 from '../../../assets/contents/trig1.png'
import trig2 from '../../../assets/contents/trig2.png'
import trig3 from '../../../assets/contents/trig3.png'

export default function Trigonometry() {
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const c4 = useRef(null);
  const c5 = useRef(null);
  const c6 = useRef(null);
  const c7 = useRef(null);
  const c8 = useRef(null);

  const contents = [
    ['ฟังก์ชันไซน์และโคไซน์', c1],
    ['ฟังก์ชันตรีโกณมิติอื่นๆ', c2],
    ['ฟังก์ชันตรีโกณมิติกับตำแหน่งมุม', c3],
    ['เอกลักษณ์ตรีโกณมิติ', c4],
    ['ตัวผกผันของฟังก์ชันตรีโกณมิติ', c5],
    ['สูตรมุมผลบวก-สองเท่า', c6],
    ['สูตรผลบวก/ผลต่างของฟังก์ชัน', c7],
    ['กฎของ sine และ cosine', c8],
  ];

  return (
    <div>
      <Banner text='ตรีโกณมิติ' />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>ฟังก์ชันไซน์และโคไซน์ <div ref={c1} /></H2>
        <P>จะได้ฟังก์ชันว่า y = sinθ และ x = cosθ ซึ่งค่า (x, y) จะเป็นจุดบนระนาบของฟังก์ชันสมการวงกลมที่มีรัศมี 1 หน่วย {'(x, y) ∈ ℝ x ℝ | x² + y² = 1'} ว่า "วงกลมหนึ่งหน่วย" (the unit circle)</P>
        <img src={trig1} className='w-full' />
        <P>ดังนั้น (x, y) = (cosθ, sinθ)</P>
        <P>การวัดค่ามุม: องศา (°) และ เรเดียน (rad) โดย 180° = π rad</P>
        <P><b>โดเมน-เรนจ์</b> ของฟังก์ชันไซน์และโคไซน์: ℝ → [−1, 1]</P>

        <Sep />
        <H2>ฟังก์ชันตรีโกณมิติอื่นๆ <div ref={c2} /></H2>
        <List>
          <Li>tanθ = sinθ / cosθ</Li>
          <Li>secθ = 1 / cosθ</Li>
          <Li>cosecθ = 1 / sinθ</Li>
          <Li>cotθ = cosθ / sinθ</Li>
          <Li>โดยที่ sinθ, cosθ ≠ 0</Li>
        </List>

        <Sep />
        <H2>ฟังก์ชันตรีโกณมิติกับตำแหน่งมุม <div ref={c3} /></H2>
        <P>เมื่อจุดยอดของมุมอยู่ที่จุด (0,0) และด้านเริ่มต้นของมุมนั้นทาบไปตามแกน x ทางบวก จะเรียกว่ามุมอยู่ใน <b>ตำแหน่งมาตรฐาน</b> (Standard position)</P>
        <img src={trig2} className='w-full' />
        <P><b>โดเมน-เรนจ์</b> ของฟังก์ชันแทนเจนต์: ℝ \ {'(π/2 + kπ)'} → ℝ</P>

        <Sep />
        <H2>เอกลักษณ์ตรีโกณมิติ <div ref={c4} /></H2>
        <List>
          <Li>cos²θ + sin²θ = 1</Li>
          <Li>1 + tan²θ = sec²θ</Li>
          <Li>cot²θ + 1 = cosec²θ</Li>
        </List>

        <Sep />
        <H2>ตัวผกผันของฟังก์ชันตรีโกณมิติ <div ref={c5} /></H2>
        <List>
          <Li>Arcsin: x = sin y, −π/2 ≤ y ≤ π/2 → y = arcsin x</Li>
          <Li>Arccos: x = cos y, 0 ≤ y ≤ π → y = arccos x</Li>
          <Li>Arctan: x = tan y, −π/2 &lt; y &lt; π/2 → y = arctan x</Li>
        </List>

        <Sep />
        <H2>สูตรมุมผลบวก-สองเท่า <div ref={c6} /></H2>
        <List>
          <Li>sin(a ± b) = sin a cos b ± cos a sin b</Li>
          <Li>cos(a ± b) = cos a cos b ∓ sin a sin b</Li>
          <Li>tan(a ± b) = (tan a ± tan b) / (1 ∓ tan a tan b)</Li>
          <Li>sin(2a) = 2 sin a cos a</Li>
          <Li>cos(2a) = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a</Li>
          <Li>sin²(a/2) = (1 − cos a) / 2</Li>
          <Li>cos²(a/2) = (1 + cos a) / 2</Li>
        </List>

        <Sep />
        <H2>สูตรผลบวก/ผลต่างของฟังก์ชัน <div ref={c7} /></H2>
        <List>
          <Li>sin(a + b) + sin(a − b) = 2 sin a cos b</Li>
          <Li>sin(a + b) − sin(a − b) = 2 cos a sin b</Li>
          <Li>cos(a + b) + cos(a − b) = 2 cos a cos b</Li>
          <Li>cos(a + b) − cos(a − b) = −2 sin a sin b</Li>
        </List>

        <Sep />
        <H2>กฎของ sine และ cosine <div ref={c8} /></H2>
        <P>กฏของ sine ให้สามเหลี่ยม ABC มีด้านตรงข้ามมุม A, B และ C ยาว a, b และ c หน่วยตามลำดับ จะได้:</P>
        <img src={trig3} className='w-full' />
        <List title='กฎของ Cosine'>
          <Li>a² = b² + c² − 2bc cos A</Li>
          <Li>b² = a² + c² − 2ac cos B</Li>
          <Li>c² = a² + b² − 2ab cos C</Li>
        </List>
      </Main>
    </div>
  );
}
