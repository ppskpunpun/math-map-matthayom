import { useRef } from 'react'
import Main from "../../../components/Main"
import Banner from "../../../components/Banner"
import H2 from "../../../components/H2"
import P from '../../../components/P'
import TOC from "../../../components/TOC"
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

// import any images if needed
import vec1 from '../../../assets/contents/vec1.png'
import vec2 from '../../../assets/contents/vec2.png'
import vec3 from '../../../assets/contents/vec3.png'
import vec4 from '../../../assets/contents/vec4.png'
import vec5 from '../../../assets/contents/vec5.png'
import vec6 from '../../../assets/contents/vec6.png'
import vec7 from '../../../assets/contents/vec7.png'
import vec8 from '../../../assets/contents/vec8.png'
import vec9 from '../../../assets/contents/vec9.png'
import vec10 from '../../../assets/contents/vec10.png'
import vec11 from '../../../assets/contents/vec11.png'
import vec12 from '../../../assets/contents/vec12.png'
import vec13 from '../../../assets/contents/vec13.png'

export default function Vector() {
  const c1 = useRef(null)
  const c2 = useRef(null)
  const c3 = useRef(null)
  const c4 = useRef(null)
  const c5 = useRef(null)
  const c6 = useRef(null)
  const c7 = useRef(null)
  const c8 = useRef(null)

  const contents = [
    ['เวกเตอร์คืออะไร', c1],
    ['ชนิดของเวกเตอร์', c2],
    ['การบวกและลบเวกเตอร์', c3],
    ['การคูณเวกเตอร์ด้วยสเกลาร์', c4],
    ['เวกเตอร์ในระบบพิกัดฉาก', c5],
    ['ผลคูณเชิงสเกลาร์', c6],
    ['ผลคูณเชิงเวกเตอร์', c7],
    ['การประยุกต์ของเวกเตอร์', c8],
  ]

  return (
    <div>
      <Banner text='เวกเตอร์ (Vector)' />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>เวกเตอร์คืออะไร <div ref={c1} /></H2>
        <P>เวกเตอร์ (Vector) คือปริมาณที่มีทั้ง <b>ขนาด</b> (magnitude) และ <b>ทิศทาง</b> (direction)</P>
        <P>แทนด้วยตัวอักษรภาษาอังกฤษและมีลูกศรอยู่ข้างบน เช่น</P>
        <img src={vec9} />

        <Sep />
        <H2>ชนิดของเวกเตอร์ <div ref={c2} /></H2>
        <List>
          <Li><b>เวกเตอร์ศูนย์ (Zero vector):</b> ขนาดเป็นศูนย์ ไม่มีทิศทาง</Li>
          <Li><b>เวกเตอร์เท่ากัน:</b> มีขนาดและทิศทางเดียวกัน</Li>
          <Li><b>เวกเตอร์ตรงข้าม:</b> ขนาดเท่ากัน แต่ทิศทางตรงข้าม</Li>
          <Li><b>เวกเตอร์หนึ่งหน่วย (Unit vector):</b> เวกเตอร์ที่มีขนาด = 1</Li>
        </List>

        <Sep />
        <H2>การบวกและลบเวกเตอร์ <div ref={c3} /></H2>
        <P><b>การบวกเวกเตอร์:</b> ผลบวกของเวกเตอร์ u และ v คือเวกเตอร์ที่มีจุดเริ่มต้นอยู่ที่จุดเริ่มต้นของ u และจุดสิ้นสุดอยู่ที่ v (หางต่อหัว)</P>
        <img src={vec1}  className='w-full'/>
        <P><b>การลบเวกเตอร์:</b> u - v คือผลบวกของ u กับ -v นั่นคือ u - v = u + (-v)</P>
        <div className='grid grid-cols-2'>
          <img src={vec2} className='w-full' />
          <img src={vec3} className='w-full' />
        </div>

        <Sep />
        <H2>การคูณเวกเตอร์ด้วยสเกลาร์ <div ref={c4} /></H2>
        <P>ให้ a เป็นสเกลาร์ และ u เป็นเวกเตอร์ ผลคูณของ u กับ a คือเวกเตอร์ใหม่ au โดย</P>
        <List>
          <Li>ถ้า a = 0 ⇒ au = 0</Li>
          <Li>ถ้า a &gt; 0 ⇒ au มีขนาด |a||u| และทิศทางเดียวกับ u</Li>
          <Li>ถ้า a &lt; 0 ⇒ au มีขนาด |a||u| และทิศทางตรงข้ามกับ u</Li>
        </List>

        <Sep />
        <H2>เวกเตอร์ในระบบพิกัดฉาก <div ref={c5} /></H2>
        <P><b>เวกเตอร์ในระบบพิกัดฉากสองมิติ:</b> เมื่อ a และ b เป็นจำนวนจริงใดๆ จะเขียนแทนด้วยผลบวกของเวกเตอร์สองเวกเตอร์</P>
        <img src={vec5} />
        <P><b>เวกเตอร์ในระบบพิกัดฉากสามมิติ</b></P>
        <img src={vec6} />
        <img src={vec7} />
        <P><b>ขนาดของเวกเตอร์ในระบบพิกัดฉากสองและสามมิติ ขนาดของเวกเตอร์ u แทนด้วยสัญลักษณ์ |u|</b></P>
        <img src={vec8} />
        <img src={vec10} />

        <Sep />
        <H2>ผลคูณเชิงสเกลาร์ <div ref={c6} /></H2>
        <P>ให้ u และ v เป็นเวกเตอร์ในระบบพิกัดฉาก a1,a2,a3,b1,b2 และ b3 เป็นปริมาณสเกลาร์ ผลคูณเชิงสเกลาร์เขียนแทนด้วย u•v อ่านว่า u ดอท/คูณ v</P>
        <List>
          <Li>ถ้า u = a1i + a2j และ v = b1i + b2j เป็นเวกเตอร์ในระบบพิกัดฉากสองมิติ จะได้ u•v = a1b1 + a2b2</Li>
          <Li>ถ้า u = a1i + a2j + a3k และ v = b1i + b2j + b3k เป็นเวกเตอร์ในระบบพิกัดฉากสามมิติ จะได้ u•v = a1b1 + a2b2 + a3b3</Li>
        </List>
        <P>สูตรการหามุมที่ทำกันระหว่างสองเวกเตอร์ด้วยผลคูณเชิงสเกลาร์ <b>u•v = |u||v|cosθ</b> เมื่อ θ เป็นขนาดของมุมระหว่าง u และ v โดยที่ 0  โดยเมื่อมุมระหว่างสองเวกเตอร์มีค่า 90 องศา (ตั้งฉากกัน) จะได้ผลคูณเชิงสเกลาร์เท่ากับ 0 องศา คือ u•v = 0</P>

        <Sep />
        <H2>ผลคูณเชิงเวกเตอร์ <div ref={c7} /></H2>
        <P>ให้ u และ v เป็นเวกเตอร์ในระบบพิกัดฉาก a1,a2,a3,b1,b2 และ b3 เป็นปริมาณสเกลาร์ ผลคูณเชิงเวกเตอร์เขียนแทนด้วย u x v อ่านว่า u ครอส v</P>
        <img src={vec11} />
        <P>สูตรการหามุมที่ทำกันระหว่างสองเวกเตอร์ด้วยผลคูณเชิงเวกเตอร์ <b>|u x v| = |u||v|sinθ</b> โดยเมื่อเวกเตอร์ระหว่างสองเวกเตอร์มีขนานกัน จะได้ผลคูณเชิงเวกเตอร์เท่ากับ 0 คือ |u x v| = 0</P>

        <Sep />
        <H2>การประยุกต์ของเวกเตอร์ <div ref={c8} /></H2>
        <P><b>พื้นที่ของรูปสี่เหลี่ยมด้านขนาน</b></P>
        <img src={vec12} />
        <P><b>ปริมาตรของทรงสี่เหลี่ยมด้านขนาน</b></P>
        <img src={vec13} />
      </Main>
    </div>
  )
}
