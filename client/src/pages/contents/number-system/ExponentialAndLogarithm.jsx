import { useRef } from 'react'
import Main from '../../../components/Main'
import Banner from '../../../components/Banner'
import H2 from '../../../components/H2'
import H3 from '../../../components/H3'
import P from '../../../components/P'
import TOC from '../../../components/TOC'
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

export default function ExponentialAndLogarithm() {
  const c1 = useRef(null)
  const c2 = useRef(null)
  const c3 = useRef(null)
  const c4 = useRef(null)
  const c5 = useRef(null)

  const contents = [
    ['ฟังก์ชันเอกซ์โพเนนเชียล', c1],
    ['ฟังก์ชันลอการิทึม', c2],
    ['คุณสมบัติของลอการิทึม', c3],
    ['ลอการิทึมธรรมชาติ (ln)', c4],
    ['การประยุกต์ใช้', c5],
  ]

  return (
    <div>
      <Banner text="ฟังก์ชัน Exponential และ Logarithm" />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>ฟังก์ชันเอกซ์โพเนนเชียล (Exponential Function) <div ref={c1} /></H2>
        <P>นิยาม: ให้ (x, y) ∈ ℝ × ℝ จะได้ฟังก์ชันในรูป y = aˣ โดยที่ a เป็นจำนวนจริง ซึ่ง a &gt; 0 และ a ≠ 1</P>
        <P>ลักษณะกราฟ:</P>
        <List>
          <Li>เมื่อ a &gt; 1 กราฟจะมีแนวโน้มเพิ่มขึ้น (ฟังก์ชันเพิ่ม)</Li>
          <Li>เมื่อ 0 &lt; a &lt; 1 กราฟจะมีแนวโน้มลดลง (ฟังก์ชันลด)</Li>
        </List>

        <Sep />
        <H2>ฟังก์ชันลอการิทึม (Logarithmic Function) <div ref={c2} /></H2>
        <P>นิยาม: ให้ (x, y) ∈ ℝ⁺ × ℝ จะได้ฟังก์ชันในรูป x = aʸ ก็ต่อเมื่อ y = logₐx</P>
        <P>อ่านว่า “ลอการึทึมของ x ฐาน a” โดยที่ a &gt; 0 และ a ≠ 1</P>
        <P>ลักษณะกราฟ: กราฟของ y = logₐx เป็นฟังก์ชันผกผันของ y = aˣ ซึ่งสะท้อนบนเส้น y = x</P>

        <Sep />
        <H2>คุณสมบัติของลอการิทึม <div ref={c3} /></H2>
        <List>
          <Li>logₐ(xy) = logₐx + logₐy</Li>
          <Li>logₐ(x/y) = logₐx − logₐy</Li>
          <Li>logₐ(xⁿ) = n·logₐx</Li>
          <Li>logₐ(a) = 1</Li>
          <Li>logₐ(1) = 0</Li>
          <Li>logₐaᵇ = b</Li>
          <Li>เปลี่ยนฐาน: logₐx = logᵦx / logᵦa</Li>
        </List>

        <Sep />
        <H2>ลอการิทึมธรรมชาติ (Natural Logarithm: ln) <div ref={c4} /></H2>
        <P>ลอการิทึมธรรมชาติหมายถึงลอการิทึมที่มีฐานเป็น e</P>
        <P>ได้ว่า ln x = logₑx = log x / log e</P>
        <P>โดย e เป็นจำนวนอตรรกยะที่มีค่าประมาณ 2.7182818</P>
        <List>
          <Li>ln(1) = log(1) / log(e) = 0</Li>
          <Li>ln(e) = log(e) / log(e) = 1</Li>
        </List>

        <Sep />
        <H2>การประยุกต์ใช้ <div ref={c5} /></H2>
        <P>ฟังก์ชันเอกซ์โพเนนเชียลและลอการิทึมสามารถใช้ในการแก้ปัญหาต่างๆ เช่น:</P>
        <List>
          <Li>การเพิ่มจำนวนประชากร</Li>
          <Li>การคำนวณดอกเบี้ยทบต้น</Li>
          <Li>การวิเคราะห์อัตราเงินเฟ้อ</Li>
          <Li>การเพิ่มจำนวนแบคทีเรีย</Li>
          <Li>การสลายตัวของสารกัมมันตรังสี</Li>
          <Li>ระดับเสียง</Li>
          <Li>ระดับความเป็นกรด-เบส (pH)</Li>
        </List>
        <P>สามารถนำความรู้เหล่านี้ไปประยุกต์ใช้ในสาขาอื่นๆ ได้อีกมากมาย</P>
      </Main>
    </div>
  )
}
