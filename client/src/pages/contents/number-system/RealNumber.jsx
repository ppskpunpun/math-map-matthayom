import { useRef } from 'react'
import Main from '../../../components/Main'
import Banner from '../../../components/Banner'
import H2 from '../../../components/H2'
import H3 from '../../../components/H3'
import P from '../../../components/P'
import TOC from '../../../components/TOC'
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

export default function RealNumber() {
  const c1 = useRef(null)
  const c2 = useRef(null)
  const c3 = useRef(null)
  const c4 = useRef(null)
  const c5 = useRef(null)
  const c6 = useRef(null)
  const c7 = useRef(null)
  const c8 = useRef(null)

  const contents = [
    ['สัจพจน์การเท่ากัน', c1],
    ['สัจพจน์เชิงพีชคณิต', c2],
    ['ทฤษฎีบทการหารพหุนาม', c3],
    ['อสมการพหุนามตัวแปรเดียว', c4],
    ['ช่วงของจำนวนจริง', c5],
    ['ค่าสัมบูรณ์', c6],
    ['ทฤษฎีบทค่าสัมบูรณ์', c7],
    ['อสมการค่าสัมบูรณ์', c8],
  ]

  return (
    <div>
      <Banner text="จำนวนจริงและพีชคณิต" />
      <Main>
        <TOC contents={contents} />
        <Sep />
        <img className='w-full' src='https://www.scimath.org/images/uploads/2_18.jpg' />
        <Sep />

        <H2>สัจพจน์การเท่ากันของระบบจำนวนจริง <div ref={c1} /></H2>
        <List>
          <Li><b>กฎการสะท้อน</b> (Reflexive): a = a</Li>
          <Li><b>กฎการสมมาตร</b> (Symmetric): ถ้า a = b แล้ว b = a</Li>
          <Li><b>กฎการถ่ายทอด</b> (Transitive): ถ้า a = b และ b = c แล้ว a = c</Li>
        </List>

        <Sep />
        <H2>สัจพจน์เชิงพีชคณิต <div ref={c2} /></H2>
        <H3>สมบัติของการบวกและคูณ</H3>
        <List>
          <Li><b>สมบัติปิด</b>: a + b ∈ ℝ, ab ∈ ℝ</Li>
          <Li><b>สมบัติการสลับที่</b>: a + b = b + a, ab = ba</Li>
          <Li><b>สมบัติการเปลี่ยนหมู่</b>: (a + b) + c = a + (b + c), (ab)c = a(bc)</Li>
          <Li><b>สมบัติเอกลักษณ์</b>: a + 0 = a, a × 1 = a</Li>
          <Li><b>สมบัติอินเวอร์ส</b>: a + (−a) = 0, a × a⁻¹ = 1 (a ≠ 0)</Li>
          <Li><b>สมบัติการแจกแจง</b>: a(b + c) = ab + ac</Li>
        </List>

        <Sep />
        <H2>ทฤษฎีบทการหารพหุนาม <div ref={c3} /></H2>
        <P>จากทฤษฎีบท: ตัวตั้ง = ตัวหาร × ผลหาร + เศษ</P>
        <P>หรือ: a(x) = b(x)q(x) + r(x) โดยที่ deg(r) &lt; deg(b)</P>
        <H3>1. การหารยาว</H3>
        <P>ใช้ในระดับมัธยมศึกษาตอนต้น</P>
        <H3>2. ทฤษฎีบทเศษเหลือ</H3>
        <P>ถ้า p(x) หารด้วย x − c เศษคือ p(c)</P>
        <P>เช่น p(x) = 9x³ + 4x − 1, หารด้วย x − ½ → p(½) = 17/8</P>

        <H3>3. ทฤษฎีบทตัวประกอบ</H3>
        <P>p(x) มี x − c เป็นตัวประกอบ ก็ต่อเมื่อ p(c) = 0</P>

        <H3>4. ทฤษฎีบทตัวประกอบตรรกยะ</H3>
        <P>ถ้า x − k/m เป็นตัวประกอบ และ gcd(k, m) = 1:</P>
        <List>
          <Li>m หารสัมประสิทธิ์ของ x ดีกรีสูงสุด</Li>
          <Li>k หารสัมประสิทธิ์ของ x ดีกรีต่ำสุด</Li>
        </List>

        <Sep />
        <H2>อสมการพหุนามตัวแปรเดียว <div ref={c4} /></H2>
        <H3>Example:</H3>
        <P>จงหาเซตคำตอบของอสมการ x² − 8x − 9 &gt; 0</P>
        <P>เนื่องจาก x² − 8x − 9 = (x − 9)(x + 1)</P>
        <P>ดังนั้นคำตอบคือช่วงที่ (x − 9)(x + 1) &gt; 0</P>
        <P>สามารถเขียนเป็นช่วงคำตอบได้</P>
        {/* เพิ่ม NumberLine component หรือกราฟช่วงคำตอบที่นี่ */}

        <Sep />
        <H2>ช่วงของจำนวนจริง (Interval) <div ref={c5} /></H2>
        <List>
          <Li><b>ช่วงเปิด</b> (a, b): {`{x | a < x < b}`}</Li>
          <Li><b>ช่วงปิด</b> [a, b]: {`{x | a ≤ x ≤ b}`}</Li>
          <Li><b>ช่วงครึ่งเปิด</b> (a, b] หรือ [a, b): {`{x | a < x ≤ b}`} หรือ {`{x | a ≤ x < b}`}</Li>
          <Li><b>ช่วงเปิดอนันต์</b>: (a, ∞) หรือ (−∞, a)</Li>
          <Li><b>ช่วงปิดอนันต์</b>: [a, ∞) หรือ (−∞, a]</Li>
        </List>

        <Sep />
        <H2>ค่าสัมบูรณ์ (Absolute Value) <div ref={c6} /></H2>
        <P>ให้ a ∈ ℝ ค่าสัมบูรณ์ของ a คือ:</P>
        <List>
          <Li>|a| = a เมื่อ a ≥ 0</Li>
          <Li>|a| = −a เมื่อ a &lt; 0</Li>
        </List>

        <Sep />
        <H2>ทฤษฎีบทเกี่ยวกับค่าสัมบูรณ์ <div ref={c7} /></H2>
        <List>
          <Li>|x| = |−x|</Li>
          <Li>|xy| = |x||y|</Li>
          <Li>|x/y| = |x| / |y| เมื่อ y ≠ 0</Li>
          <Li>|x − y| = |y − x|</Li>
          <Li>|x²| = x²</Li>
          <Li>|x + y| ≤ |x| + |y|</Li>
        </List>

        <Sep />
        <H2>อสมการค่าสัมบูรณ์ <div ref={c8} /></H2>
        <P>ให้ x และ a เป็นจำนวนจริง</P>
        <List>
          <Li>|x| &gt; a หรือ ≥ a ⟹ x &gt; a หรือ x &lt; −a</Li>
          <Li>|x| &lt; a หรือ ≤ a ⟹ −a &lt; x &lt; a</Li>
        </List>
      </Main>
    </div>
  )
}
