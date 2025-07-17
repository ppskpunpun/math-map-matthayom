import { useRef } from 'react'
import Main from "../../../components/Main"
import Banner from "../../../components/Banner"
import H2 from "../../../components/H2"
import P from '../../../components/P'
import TOC from "../../../components/TOC"
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

import complex1 from '../../../assets/contents/complex1.png'
import complex2 from '../../../assets/contents/complex2.png'
import complex3 from '../../../assets/contents/complex3.png'

export default function ComplexNumber() {
  const c1 = useRef(null)
  const c2 = useRef(null)
  const c3 = useRef(null)
  const c4 = useRef(null)
  const c5 = useRef(null)
  const c6 = useRef(null)
  const c7 = useRef(null)
  const c8 = useRef(null)
  const c9 = useRef(null)
  const c10 = useRef(null)

  const contents = [
    ['นิยามจำนวนเชิงซ้อน', c1],
    ['เอกลักษณ์และตัวผกผันการบวก', c2],
    ['เอกลักษณ์และตัวผกผันการคูณ', c3],
    ['การบวก ลบ คูณ จำนวนเชิงซ้อน', c4],
    ['การหารจำนวนเชิงซ้อน', c5],
    ['สังยุคของจำนวนเชิงซ้อน', c6],
    ['รากที่สองของจำนวนเชิงซ้อน', c7],
    ['ค่าสัมบูรณ์ของจำนวนเชิงซ้อน', c8],
    ['กราฟของจำนวนเชิงซ้อน', c9],
    ['รูปเชิงขั้วของจำนวนเชิงซ้อน', c10],
  ]

  return (
    <div>
      <Banner text='จำนวนเชิงซ้อน (Complex Numbers)' />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>นิยามจำนวนเชิงซ้อน <div ref={c1} /></H2>
        <P>จำนวนเชิงซ้อนคือจำนวนที่อยู่ในรูป a + bi เมื่อ a และ b เป็นจำนวนจริง</P>
        <P>แทนจำนวนเชิงซ้อนด้วย z หรือเขียนแทนด้วย (a, b)</P>
        <P>a เรียกว่าส่วนจริงของ z เขียนแทนด้วย Re(z)</P>
        <P>b เรียกว่าส่วนจินตภาพของ z เขียนแทนด้วย Im(z)</P>

        <Sep />
        <H2>เอกลักษณ์และตัวผกผันการบวก <div ref={c2} /></H2>
        <List>
          <Li>เอกลักษณ์การบวก: (a + bi) + 0 = 0 + (a + bi) = a + bi</Li>
          <Li>ตัวผกผันการบวก: -z = -a - bi</Li>
        </List>

        <Sep />
        <H2>เอกลักษณ์และตัวผกผันการคูณ <div ref={c3} /></H2>
        <List>
          <Li>เอกลักษณ์การคูณ: (a, b)(1, 0) = (1, 0)(a, b) = (a, b)</Li>
          <Li>ตัวผกผันการคูณ: z⁻¹ = (a - bi) / (a² + b²), เมื่อ z ≠ 0</Li>
        </List>

        <Sep />
        <H2>การบวก ลบ คูณ จำนวนเชิงซ้อน <div ref={c4} /></H2>
        <List title='สมบัติของ i'>
          <Li>i¹ = i</Li>
          <Li>i² = -1</Li>
          <Li>i³ = -i</Li>
          <Li>i⁴ = 1 (วนซ้ำทุก 4 รอบ)</Li>
        </List>
        <P>ให้ z₁ = a₁ + b₁i และ z₂ = a₂ + b₂i</P>
        <P>การบวก/ลบ: z₁ ± z₂ = (a₁ ± a₂) + (b₁ ± b₂)i</P>
        <P>การคูณ: z₁ × z₂ = (a + bi)(c + di) = (ac - bd) + (ad + bc)i</P>

        <Sep />
        <H2>การหารจำนวนเชิงซ้อน <div ref={c5} /></H2>
        <P>การหาร z ÷ w = z • w⁻¹ เมื่อ w ≠ 0</P>

        <Sep />
        <H2>สังยุคของจำนวนเชิงซ้อน <div ref={c6} /></H2>
        <P>ให้ z = a + bi</P>
        <P>สังยุคของ z คือ a - bi เขียนแทนด้วย <b>z (มีขีดบนด้านบนด้วย)</b></P>
        <P>สมบัติเพิ่มเติมของสังยุค</P>
        <img src={complex1} />

        <Sep />
        <H2>รากที่สองของจำนวนเชิงซ้อน <div ref={c7} /></H2>
        <P>ให้ z = a+bi และให้ r = root2(a^2+b^2) จะได้ว่ารากที่สองของ z คือ</P>
        <img src={complex2} />

        <Sep />
        <H2>ค่าสัมบูรณ์ของจำนวนเชิงซ้อน <div ref={c8} /></H2>
        <P>ให้ z = a + bi</P>
        <P>ค่าสัมบูรณ์ของ z คือ |z| = √(a² + b²)</P>
        <P>เป็นระยะห่างจากจุด (0, 0) ถึงจุด (a, b) ในกราฟ</P>
        <P>สมบัติเพิ่มเติมของค่าสัมบูรณ์</P>
        <img src={complex3} />

        <Sep />
        <H2>กราฟของจำนวนเชิงซ้อน <div ref={c9} /></H2>
        <P>แกน x แทนส่วนจริง และแกน y แทนส่วนจินตภาพ</P>
        <P>จำนวนเชิงซ้อน z = a + bi แทนด้วยจุด (a, b) บนระนาบเชิงซ้อน</P>

        <Sep />
        <H2>รูปเชิงขั้วของจำนวนเชิงซ้อน <div ref={c10} /></H2>
        <P>เขียนได้ในรูป z = r(cosθ + i sinθ)</P>
        <P>โดยที่ r = |z| = √(x² + y²) และ tanθ = y / x (เมื่อ x ≠ 0)</P>
        <P>และ x = r cosθ, y = r sinθ</P>
      </Main>
    </div>
  )
}
