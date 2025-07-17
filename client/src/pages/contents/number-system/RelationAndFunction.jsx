import { useRef } from 'react'
import Main from '../../../components/Main'
import Banner from '../../../components/Banner'
import H2 from '../../../components/H2'
import H3 from '../../../components/H3'
import P from '../../../components/P'
import TOC from '../../../components/TOC'
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

export default function RelationAndFunction() {
  const c1 = useRef(null)
  const c2 = useRef(null)
  const c3 = useRef(null)
  const c4 = useRef(null)
  const c5 = useRef(null)
  const c6 = useRef(null)
  const c7 = useRef(null)
  const c8 = useRef(null)

  const contents = [
    ['ความสัมพันธ์', c1],
    ['โดเมนและเรนจ์', c2],
    ['ตัวผกผันของความสัมพันธ์', c3],
    ['ฟังก์ชัน', c4],
    ['ฟังก์ชันเพิ่มและลด', c5],
    ['การดำเนินการของฟังก์ชัน', c6],
    ['ฟังก์ชันประกอบ', c7],
    ['ฟังก์ชันผกผัน', c8],
  ]

  return (
    <div>
      <Banner text="ความสัมพันธ์และฟังก์ชัน" />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>ความสัมพันธ์ (Relationship) <div ref={c1} /></H2>
        <P>หมายถึง เซตของคู่อันดับ (a, b) โดยที่ a และ b มีความเกี่ยวข้องกันบางประการ</P>
        <P>ผลคูณคาร์ทีเซียน คือเซตของคู่อันดับ (a, b) ทั้งหมดโดยที่ a ∈ A และ b ∈ B</P>
        <P>เขียน A × B = {'{(a, b) | a ∈ A และ b ∈ B}'}</P>

        <Sep />
        <H2>โดเมนและเรนจ์ของความสัมพันธ์ <div ref={c2} /></H2>
        <List>
          <Li><b>โดเมน (Domain)</b> ของ r คือเซตของสมาชิกตัวหน้าในคู่อันดับของ r</Li>
          <Li><b>เรนจ์ (Range)</b> ของ r คือเซตของสมาชิกตัวหลังในคู่อันดับของ r</Li>
        </List>

        <Sep />
        <H2>ตัวผกผันของความสัมพันธ์ <div ref={c3} /></H2>
        <P>ตัวผกผันของ r คือ ความสัมพันธ์ที่เกิดจากการสลับสมาชิกของแต่ละคู่อันดับใน r</P>

        <Sep />
        <H2>ฟังก์ชัน (Function) <div ref={c4} /></H2>
        <P>หมายถึง ความสัมพันธ์ที่คู่อันดับใดๆ หากสมาชิกตัวหน้าเหมือนกันแล้ว สมาชิกตัวหลังต้องเหมือนกัน</P>
        <P>ตรวจสอบได้โดยลากเส้นขนานแกน y แล้วดูว่าตัดกราฟที่จุดเดียว</P>
        <P>เขียน f : A → B หมายถึงฟังก์ชันจาก A ไป B</P>
        <List>
          <Li><b>ฟังก์ชัน onto</b>: ฟังก์ชันที่เรนจ์ครอบคลุมทุกสมาชิกใน B</Li>
          <Li><b>ฟังก์ชันหนึ่งต่อหนึ่ง (one-to-one)</b>: ถ้า f(x₁) = f(x₂) แล้ว x₁ = x₂</Li>
          <Li><b>ฟังก์ชันหนึ่งต่อหนึ่งและ onto</b>: คือฟังก์ชันที่เป็นทั้งหนึ่งต่อหนึ่งและ onto</Li>
        </List>

        <Sep />
        <H2>ฟังก์ชันเพิ่มและฟังก์ชันลด <div ref={c5} /></H2>
        <List>
          <Li><b>ฟังก์ชันเพิ่ม</b>: ถ้า x₁ &lt; x₂ แล้ว f(x₁) &lt; f(x₂)</Li>
          <Li><b>ฟังก์ชันลด</b>: ถ้า x₁ &lt; x₂ แล้ว f(x₁) &gt; f(x₂)</Li>
        </List>

        <Sep />
        <H2>การดำเนินการของฟังก์ชัน <div ref={c6} /></H2>
        <List>
          <Li>(f + g)(x) = f(x) + g(x)</Li>
          <Li>(f − g)(x) = f(x) − g(x)</Li>
          <Li>(fg)(x) = f(x)g(x)</Li>
          <Li>(f / g)(x) = f(x) / g(x), เมื่อ g(x) ≠ 0</Li>
        </List>
        <P>โดเมนของ f+g, f−g, fg คือ Df ∩ Dg</P>
        <P>โดเมนของ f/g คือ Df ∩ Dg − {'{x | g(x) = 0}'}</P>

        <Sep />
        <H2>ฟังก์ชันประกอบ (Composition) <div ref={c7} /></H2>
        <P>ให้ f และ g เป็นฟังก์ชัน และ Rf ∩ Dg ≠ ∅</P>
        <P>ฟังก์ชันประกอบ fog หรือ f∘g(x) = f(g(x))</P>
        <P>โดย D fog = {'{x ∈ Dg | g(x) ∈ Df}'}</P>

        <Sep />
        <H2>ฟังก์ชันผกผัน (Inverse Function) <div ref={c8} /></H2>
        <P>ได้จากการสลับสมาชิกตัวหน้าและตัวหลังของคู่อันดับในฟังก์ชันเดิม</P>
        <P>ฟังก์ชันผกผันไม่จำเป็นต้องเป็นฟังก์ชัน</P>
        <P>เช่น g = {'{(1,2), (3,2), (2,3)}'} เป็นฟังก์ชัน แต่ g⁻¹ = {'{(2,1), (2,3), (3,2)}'} ไม่เป็นฟังก์ชัน</P>
        <P>จากทฤษฎีบท: f มีฟังก์ชันผกผันก็ต่อเมื่อ f เป็นฟังก์ชันหนึ่งต่อหนึ่ง</P>
      </Main>
    </div>
  )
}
