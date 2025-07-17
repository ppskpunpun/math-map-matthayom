import { useRef } from 'react'
import Main from '../../../components/Main'
import Banner from '../../../components/Banner'
import H2 from '../../../components/H2'
import H3 from '../../../components/H3'
import P from '../../../components/P'
import TOC from '../../../components/TOC'
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

import cal1 from '../../../assets/contents/cal1.png'
import cal2 from '../../../assets/contents/cal2.png'
import cal3 from '../../../assets/contents/cal3.png'
import cal4 from '../../../assets/contents/cal4.png'

export default function CalculusIntro() {
  const c1 = useRef(null)
  const c2 = useRef(null)
  const c3 = useRef(null)
  const c4 = useRef(null)
  const c5 = useRef(null)
  const c6 = useRef(null)
  const c7 = useRef(null)

  const contents = [
    ['ลิมิตของฟังก์ชัน', c1],
    ['สมบัติของลิมิต', c2],
    ['ความต่อเนื่องของฟังก์ชัน', c3],
    ['อนุพันธ์ของฟังก์ชัน', c4],
    ['สูตรการหาอนุพันธ์', c5],
    ['เส้นสัมผัสเส้นโค้ง', c6],
    ['การประยุกต์ของอนุพันธ์', c7],
  ]

  return (
    <div>
      <Banner text="แคลคูลัสเบื้องต้น" />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>ลิมิตของฟังก์ชัน <div ref={c1} /></H2>
        <P>
          หมายถึง ค่าที่ฟังก์ชันเข้าใกล้ค่าใดค่าหนึ่ง เมื่อแทน x เข้าใกล้ค่าใดค่าหนึ่งลงในฟังก์ชัน
        </P>
        <P>
          กล่าวคือ สำหรับฟังก์ชัน f ใดๆ ที่มีโดเมนและเรนจ์เป็นสับเซตของเซตของจำนวนจริง ถ้าค่าของ f(x) เข้าใกล้จำนวนจริง L เมื่อ x เข้าใกล้ a ทั้งทางด้านซ้ายและขวา
          แล้วจะเรียก L ว่า ลิมิตของ f ที่ a เขียนแทนด้วยสัญลักษณ์
        </P>
        <P>
          ซึ่งค่า L จะมีค่าก็ต่อเมื่อค่าของลิมิตซ้ายของฟังก์ชันและค่าของลิมิตขวาของฟังก์ชันมีค่าเท่ากัน
        </P>
        <img src={cal1} />
        <img src={cal2} />

        <Sep />

        <H2>สมบัติของลิมิต <div ref={c2} /></H2>
        <img src={cal3} />

        <Sep />
        <H2>ความต่อเนื่องของฟังก์ชัน <div ref={c3} /></H2>
        <P>
          ให้ f เป็นฟังก์ชันนิยามบนช่วงเปิด (a, b) จะกล่าวว่า f เป็นฟังก์ชันต่อเนื่องที่ x = c ก็ต่อเมื่อ
        </P>
        <img src={cal4} />

        <Sep />
        <H2>อนุพันธ์ของฟังก์ชัน <div ref={c4} /></H2>
        <P>
          อนุพันธ์ของฟังก์ชัน f(x) เขียนแทนด้วย f’(x), dy/dx, หรือ y’ หมายถึงอัตราการเปลี่ยนแปลงของ f เทียบกับ x ขณะที่ x = a
        </P>
        <P>
          f’(x) = lim(h → 0) [f(a + h) − f(a)] / h
        </P>
        <H3>สูตรอัตราการเปลี่ยนแปลงเฉลี่ย</H3>
        <P>
          [f(a + h) − f(a)] / h เมื่อ x เปลี่ยนจาก a เป็น a + h
        </P>

        <Sep />
        <H2>สูตรการหาอนุพันธ์ <div ref={c5} /></H2>
        <List>
          <Li>ถ้า f(x) = c เมื่อ c เป็นค่าคงตัว ⇒ f’(x) = 0</Li>
          <Li>ถ้า f(x) = x ⇒ f’(x) = 1</Li>
          <Li>ถ้า f(x) = x<sup>a</sup> ⇒ f’(x) = a·x<sup>a−1</sup></Li>
          <Li>(f ± g)’(x) = f’(x) ± g’(x)</Li>
          <Li>(cf)’(x) = c·f’(x)</Li>
          <Li>(fg)’(x) = f(x)·g’(x) + g(x)·f’(x)</Li>
          <Li>(f / g)’(x) = [g(x)·f’(x) − f(x)·g’(x)] / [g(x)]²</Li>
        </List>

        <H3>สูตรอนุพันธ์ของฟังก์ชันประกอบ</H3>
        <P>(g ∘ f)’(x) = g’(f(x)) · f’(x)</P>

        <H3>สูตรการหาอนุพันธ์อันดับสูง</H3>
        <List>
          <Li>อนุพันธ์อันดับสอง: f’’(x)</Li>
          <Li>อนุพันธ์อันดับ n: f⁽ⁿ⁾(x) เมื่อ n = 3, 4, …</Li>
        </List>

        <Sep />
        <H2>เส้นสัมผัสเส้นโค้ง <div ref={c6} /></H2>
        <P>
          เส้นสัมผัสเส้นโค้งที่จุด P(a, f(a)) คือเส้นตรงที่ผ่านจุด P และมีความชันเท่ากับ f’(a) จะเรียกความชันของเส้นสัมผัสนี้ว่า ความชันของเส้นโค้งที่จุด P
        </P>

        <Sep />
        <H2>การประยุกต์ของอนุพันธ์ <div ref={c7} /></H2>
        <H3>การเคลื่อนที่แนวตรง</H3>
        <List>
          <Li>v(t) = s’(t)</Li>
          <Li>a(t) = v’(t) = s’’(t)</Li>
        </List>
      </Main>
    </div>
  )
}
