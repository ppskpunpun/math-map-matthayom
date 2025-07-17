import { useRef } from 'react'
import Main from "../../../components/Main"
import Banner from "../../../components/Banner"
import H2 from "../../../components/H2"
import P from '../../../components/P'
import TOC from "../../../components/TOC"
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

import mat1 from '../../../assets/contents/mat1.png'
import mat2 from '../../../assets/contents/mat2.png'
import mat3 from '../../../assets/contents/mat3.png'
import mat4 from '../../../assets/contents/mat4.png'
import mat5 from '../../../assets/contents/mat5.png'
import mat6 from '../../../assets/contents/mat6.png'

export default function Matrix() {
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const c4 = useRef(null);
  const c5 = useRef(null);
  const c6 = useRef(null);
  const c7 = useRef(null);

  const contents = [
    ['นิยามเมทริกซ์', c1],
    ['ชนิดของเมทริกซ์', c2],
    ['การบวก/คูณเมทริกซ์', c3],
    ['ทรานโพสของเมทริกซ์', c4],
    ['สมบัติของเมทริกซ์', c5],
    ['อินเวอร์สของเมทริกซ์', c6],
    ['ดีเทอร์มิแนนต์ของเมทริกซ์', c7],
  ];

  return (
    <div>
      <Banner text='เมทริกซ์ (Matrix)' />
      <Main>
        <TOC contents={contents} />
        <Sep />

        <H2>นิยามเมทริกซ์ <div ref={c1} /></H2>
        <P>ให้ m และ n เป็นจำนวนเต็มบวก เมทริกซ์คือชุดของจำนวนจริง m×n จำนวน ซึ่งเขียนเรียงกันเป็นตาราง โดยมี m แถว และ n หลัก</P>
        <img src={mat1} className='w-full' />
        <P>ถ้าเมทริกซ์มี m แถว n หลัก จะเรียกว่าเมทริกซ์ขนาด m × n (m by n)</P>
        <P>สมาชิกในเมทริกซ์ แทนด้วย a<sub>ij</sub> คือสมาชิกที่อยู่แถวที่ i และหลักที่ j</P>

        <Sep />
        <H2>ชนิดของเมทริกซ์ <div ref={c2} /></H2>
        <List>
          <Li><b>เมทริกซ์แนวแถว:</b> มี 1 แถว</Li>
          <Li><b>เมทริกซ์แนวหลัก:</b> มี 1 หลัก</Li>
          <Li><b>เมทริกซ์จัตุรัส:</b> จำนวนแถวเท่ากับจำนวนหลัก (n × n)</Li>
          <Li><b>เมทริกซ์ศูนย์:</b> สมาชิกทุกตัวเป็น 0</Li>
          <Li><b>เมทริกซ์เอกลักษณ์:</b> เมทริกซ์จัตุรัสที่มีค่า 1 ที่ตำแหน่ง (i, i) และตำแหน่งอื่นเป็น 0 เขียนแทนด้วย I</Li>
        </List>

        <Sep />
        <H2>การบวก/คูณเมทริกซ์ <div ref={c3} /></H2>
        <List>
          <Li><b>การบวก/ลบ:</b> ทำได้เมื่อเมทริกซ์มีขนาดเท่ากัน โดยบวกลบในตำแหน่ง (i, j) เดียวกัน</Li>
          <Li><b>การคูณด้วยค่าคงตัว:</b> คูณค่าคงตัวกับสมาชิกทุกตัวในเมทริกซ์</Li>
          <Li><b>การคูณเมทริกซ์:</b> เมทริกซ์ A (m × n) คูณกับ B (n × p) ได้เมทริกซ์ขนาด (m × p)</Li>
        </List>
        <img src={mat2} className='w-full' />

        <Sep />
        <H2>ทรานโพสของเมทริกซ์ <div ref={c4} /></H2>
        <P>ให้ A = [a<sub>ij</sub>]<sub>m×n</sub> เมทริกซ์ B = [b<sub>ij</sub>]<sub>n×m</sub> ที่ b<sub>ij</sub> = a<sub>ji</sub> คือ <b>เมทริกซ์ทรานโพส</b> ของ A</P>
        <P>เขียนแทนด้วย A<sup>t</sup> หรือ A<sup>T</sup></P>
        <List title='สมบัติของทรานโพส'>
          <Li>(AB)<sup>t</sup> = B<sup>t</sup> A<sup>t</sup></Li>
          <Li>(A + B)<sup>t</sup> = A<sup>t</sup> + B<sup>t</sup></Li>
          <Li>(A<sup>t</sup>)<sup>t</sup> = A</Li>
          <Li>(cA)<sup>t</sup> = cA<sup>t</sup></Li>
        </List>

        <Sep />
        <H2>สมบัติของเมทริกซ์ <div ref={c5} /></H2>
        <List>
          <Li>A + B = B + A (สลับที่ได้)</Li>
          <Li>A(B + C) = AB + AC (แจกแจง)</Li>
          <Li>(AB)C = A(BC) (เปลี่ยนกลุ่ม)</Li>
          <Li>การคูณเมทริกซ์สองตัว จะต้องให้ <b>จำนวนหลักของเมทริกซ์ตัวแรก = จำนวนแถวของตัวที่สอง</b></Li>
        </List>

        <Sep />
        <H2>อินเวอร์สของเมทริกซ์ <div ref={c6} /></H2>
        <P>ถ้า A เป็นเมทริกซ์จัตุรัส อินเวอร์สของ A เขียนแทนด้วย A<sup>−1</sup> โดยมีสมบัติว่า A A<sup>−1</sup> = A<sup>−1</sup> A = I</P>
        <P><b>การหาอินเวอร์สของเมทริกซ์ 2×2</b></P>
        <img src={mat3} className='w-full' />

        <Sep />
        <H2>ดีเทอร์มิแนนต์ของเมทริกซ์ <div ref={c7} /></H2>
        <P>ดีเทอร์มิแนนต์ของเมทริกซ์จัตุรัสเขียนแทนด้วย <b>det A</b> หรือ <b>|A|</b></P>
        <P><b>ขนาด 2×2:</b> ถ้า A = [[a, b], [c, d]] ⇒ det A = ad − bc</P>
        <P><b>ขนาด 3×3:</b> มี 2 วิธีการคำนวณ</P>
        <P>วิธีที่ 1</P>
        <img src={mat4} className='w-full'/>
        <P>วิธีที่ 2</P>
        <img src={mat5} className='w-full'/>
        <P>สมบัติเพิ่มเติมของดีเทอณ์มิแนนต์ (det)</P>
        <img src={mat6} className='w-full'/>
      </Main>
    </div>
  );
}
