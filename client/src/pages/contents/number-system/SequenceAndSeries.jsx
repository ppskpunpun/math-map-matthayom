import { useRef } from 'react'
import Main from "../../../components/Main"
import Banner from "../../../components/Banner"
import H2 from "../../../components/H2"
import P from '../../../components/P'
import TOC from "../../../components/TOC"
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

import s1 from '../../../assets/contents/s1.png'
import s2 from '../../../assets/contents/s2.png'

export default function SequenceAndSeries() {
  const c1 = useRef(null)
  const c2 = useRef(null)
  const c3 = useRef(null)
  const c4 = useRef(null)
  const c5 = useRef(null)
  const c6 = useRef(null)
  const c7 = useRef(null)
  const c8 = useRef(null)

  const contents = [
    ['ลำดับ', c1],
    ['ลำดับเลขคณิต', c2],
    ['ลำดับเรขาคณิต', c3],
    ['อนุกรมเลขคณิต', c4],
    ['อนุกรมเรขาคณิต', c5],
    ['อนุกรมอนันต์', c6],
    ['สัญลักษณ์ซิกมา', c7],
    ['สมบัติของซิกม่า (Sigma)', c8],
  ]

  return (
    <div>
      <Banner text='ลำดับและอนุกรม' />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>ลำดับ <div ref={c1} /></H2>
        <P>หมายถึง ฟังก์ชันที่มีโดเมนเป็นเซต {'{1,2,3,…,n}'} หรือมีโดเมนเป็นเซตของจำนวนเต็มบวก</P>
        <P><b>ลำดับจำกัดและลำดับอนันต์:</b></P>
        <P>เมื่อ a₁, a₂, a₃, …, aₙ เป็นเรนจ์ของลำดับ</P>
        <List>
          <Li>ลำดับจำกัด: โดเมนคือ {'{1,2,3,…,n}'} เขียนแทนด้วย a₁, a₂, a₃, …, aₙ</Li>
          <Li>ลำดับอนันต์: โดเมนคือเซตของจำนวนเต็มบวก เขียนแทนด้วย a₁, a₂, a₃, …, aₙ, …</Li>
        </List>

        <Sep />
        <H2>ลำดับเลขคณิต <div ref={c2} /></H2>
        <P>หมายถึง ลำดับที่ผลต่างของพจน์ที่ n+1 กับพจน์ที่ n เป็นค่าคงที่ เรียกว่า ผลต่างร่วม (d)</P>
        <List>
          <Li>สูตรหา d: aₙ₊₁ - aₙ = d</Li>
          <Li>หาพจน์ที่ n: aₙ = a₁ + (n - 1)d</Li>
        </List>

        <Sep />
        <H2>ลำดับเรขาคณิต <div ref={c3} /></H2>
        <P>หมายถึง ลำดับที่อัตราส่วนของพจน์ที่ n+1 กับพจน์ที่ n เป็นค่าคงที่ เรียกว่า อัตราส่วนร่วม (r)</P>
        <List>
          <Li>สูตรหา r: aₙ₊₁ / aₙ = r</Li>
          <Li>หาพจน์ที่ n: aₙ = a₁ • rⁿ⁻¹</Li>
        </List>

        <Sep />
        <H2>อนุกรมเลขคณิต <div ref={c4} /></H2>
        <P>แทนด้วย Sₙ โดยมีสูตร:</P>
        <List>
          <Li>Sₙ = n(a₁ + aₙ) / 2</Li>
          <Li>จัดรูป: Sₙ = n(2a₁ + (n - 1)d) / 2</Li>
        </List>

        <Sep />
        <H2>อนุกรมเรขาคณิต <div ref={c5} /></H2>
        <P>แทนด้วย Sₙ โดยมีสูตร:</P>
        <P>Sₙ = a₁(1 - rⁿ) / (1 - r) เมื่อ r ≠ 0</P>

        <Sep />
        <H2>อนุกรมอนันต์ <div ref={c6} /></H2>
        <P>สูตรผลบวกของอนุกรมเรขาคณิตอนันต์ (เมื่อ |r| {'<'} 1):</P>
        <P>S∞ = a₁ / (1 - r)</P>

        <Sep />
        <H2>สัญลักษณ์ซิกมา <div ref={c7} /></H2>
        <P>เขียนแทนด้วยสัญลักษณ์ Σ (อ่านว่า ซิกมา) กล่าวคือ จะเขียนแทนอนุกรมจำกัด a1+a2+a3+...+an </P>
        <img src={s1} />
        <P>(อ่านว่า ซัมเมชัน ai เมื่อ i เท่ากับ 1 ถึง ∞ โดยตัวแปร i ที่ปรากฎเรียกว่า ดัชนี ซึ่งอาจจะใช้ตัวแปรอื่นแทนได้)</P>

        <Sep />
        <H2>สมบัติของซิกม่า (Sigma)</H2> 
        <img src={s2} />

      </Main>
    </div>
  )
}
