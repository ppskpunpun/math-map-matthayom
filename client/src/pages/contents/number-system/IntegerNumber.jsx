import { useRef } from 'react'
import Main from "../../../components/Main"
import Banner from "../../../components/Banner"
import H2 from "../../../components/H2"
import H3 from '../../../components/H3'
import P from '../../../components/P'
import TOC from "../../../components/TOC"
import Sep from '../../../components/Sep'
import { List, Li } from '../../../components/List'

export default function IntegerNumber() {
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);

  const contents = [
    ['จำนวนเต็ม', c1],
    ['การดำเนินการกับจำนวนเต็ม', c2],
    ['สมบัติของการบวกและการคูณจำนวนเต็ม', c3],
  ];

  return (
    <div>
      <Banner text='จำนวนเต็ม'/>
      <Main>
        <TOC contents={contents}/>
        <Sep />
        <H2>จำนวนเต็ม <div ref={c1} /></H2>
        <P><b>จำนวนเต็ม (Integers & Whole Numbers) </b>คือจำนวนที่ไม่มีทศนิยมหรือไม่ติดเศษส่วน</P>
        <P>ตัวอย่างเช่น 3, 17, 2025, 0, -100, -9, -12</P>
        <List title='ประกอบไปด้วย'>
          <Li><b>จำนวนเต็มศูนย์</b> คือ 0 เพียงตัวเดียวเท่านั้น</Li> 
          <Li><b>จำนวนเต็มบวก</b> หรือ <b>จำนวนนับ</b> ได้แก่ 1, 2, 3, ...</Li> 
          <Li><b>จำนวนเต็มลบ</b> ได้แก่ -1, -2, -3, ...</Li> 
        </List>
        <Sep />
        <H2>การดำเนินการกับจำนวนเต็ม <div ref={c2} /></H2>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex excepturi aliquid blanditiis mollitia non placeat totam magnam laboriosam minus temporibus voluptatem distinctio, sapiente maiores laudantium ipsa repellendus deleniti quidem doloribus, accusantium, qui eligendi minima. Quod maxime eaque beatae eius.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex excepturi aliquid blanditiis mollitia non placeat totam magnam laboriosam minus temporibus voluptatem distinctio, sapiente maiores laudantium ipsa repellendus deleniti quidem doloribus, accusantium, qui eligendi minima. Quod maxime eaque beatae eius.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex excepturi aliquid blanditiis mollitia non placeat totam magnam laboriosam minus temporibus voluptatem distinctio, sapiente maiores laudantium ipsa repellendus deleniti quidem doloribus, accusantium, qui eligendi minima. Quod maxime eaque beatae eius.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex excepturi aliquid blanditiis mollitia non placeat totam magnam laboriosam minus temporibus voluptatem distinctio, sapiente maiores laudantium ipsa repellendus deleniti quidem doloribus, accusantium, qui eligendi minima. Quod maxime eaque beatae eius.</P>
        <Sep />
        <H2>สมบัติของการบวกและการคูณจำนวนเต็ม <div ref={c3} /></H2>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non dicta quos debitis laudantium eius, nihil reprehenderit natus necessitatibus est nobis dignissimos! Dolorem unde reprehenderit doloremque perferendis est possimus, reiciendis quam! Quibusdam eum eius similique est ducimus repudiandae sunt impedit expedita eaque dolores, vel, omnis veritatis possimus ea ex nisi alias obcaecati? Laudantium error consequuntur corrupti nobis ipsam eligendi? Soluta velit non quaerat, rerum rem adipisci reiciendis aperiam molestias vel quos inventore ipsam. Culpa laborum tempora voluptatum dolores tenetur nesciunt ab ducimus sequi reprehenderit? Eaque at delectus est et. Facere, beatae sed aperiam ratione illum fuga autem, labore porro eveniet, recusandae quisquam sit cum mollitia quasi veritatis maiores velit ea inventore perspiciatis sunt odit tempora. Iste numquam asperiores rerum iure quisquam, laudantium nemo corporis harum dolorem suscipit sapiente aliquid, ea quam tempora alias sint dolore error cumque facere eum doloremque, culpa doloribus. Aut quos ea, debitis earum labore architecto, explicabo tempore quisquam quasi officiis, nesciunt voluptates eligendi nulla sit blanditiis exercitationem ex id. Magnam odit et amet, molestiae modi enim eum sunt maiores ducimus laboriosam obcaecati vel cum doloremque ullam quia reprehenderit repellat, nisi rerum. Ex pariatur sunt culpa fuga exercitationem aspernatur reiciendis, est veniam ducimus excepturi expedita doloribus veritatis!</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non dicta quos debitis laudantium eius, nihil reprehenderit natus necessitatibus est nobis dignissimos! Dolorem unde reprehenderit doloremque perferendis est possimus, reiciendis quam! Quibusdam eum eius similique est ducimus repudiandae sunt impedit expedita eaque dolores, vel, omnis veritatis possimus ea ex nisi alias obcaecati? Laudantium error consequuntur corrupti nobis ipsam eligendi? Soluta velit non quaerat, rerum rem adipisci reiciendis aperiam molestias vel quos inventore ipsam. Culpa laborum tempora voluptatum dolores tenetur nesciunt ab ducimus sequi reprehenderit? Eaque at delectus est et. Facere, beatae sed aperiam ratione illum fuga autem, labore porro eveniet, recusandae quisquam sit cum mollitia quasi veritatis maiores velit ea inventore perspiciatis sunt odit tempora. Iste numquam asperiores rerum iure quisquam, laudantium nemo corporis harum dolorem suscipit sapiente aliquid, ea quam tempora alias sint dolore error cumque facere eum doloremque, culpa doloribus. Aut quos ea, debitis earum labore architecto, explicabo tempore quisquam quasi officiis, nesciunt voluptates eligendi nulla sit blanditiis exercitationem ex id. Magnam odit et amet, molestiae modi enim eum sunt maiores ducimus laboriosam obcaecati vel cum doloremque ullam quia reprehenderit repellat, nisi rerum. Ex pariatur sunt culpa fuga exercitationem aspernatur reiciendis, est veniam ducimus excepturi expedita doloribus veritatis!</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non dicta quos debitis laudantium eius, nihil reprehenderit natus necessitatibus est nobis dignissimos! Dolorem unde reprehenderit doloremque perferendis est possimus, reiciendis quam! Quibusdam eum eius similique est ducimus repudiandae sunt impedit expedita eaque dolores, vel, omnis veritatis possimus ea ex nisi alias obcaecati? Laudantium error consequuntur corrupti nobis ipsam eligendi? Soluta velit non quaerat, rerum rem adipisci reiciendis aperiam molestias vel quos inventore ipsam. Culpa laborum tempora voluptatum dolores tenetur nesciunt ab ducimus sequi reprehenderit? Eaque at delectus est et. Facere, beatae sed aperiam ratione illum fuga autem, labore porro eveniet, recusandae quisquam sit cum mollitia quasi veritatis maiores velit ea inventore perspiciatis sunt odit tempora. Iste numquam asperiores rerum iure quisquam, laudantium nemo corporis harum dolorem suscipit sapiente aliquid, ea quam tempora alias sint dolore error cumque facere eum doloremque, culpa doloribus. Aut quos ea, debitis earum labore architecto, explicabo tempore quisquam quasi officiis, nesciunt voluptates eligendi nulla sit blanditiis exercitationem ex id. Magnam odit et amet, molestiae modi enim eum sunt maiores ducimus laboriosam obcaecati vel cum doloremque ullam quia reprehenderit repellat, nisi rerum. Ex pariatur sunt culpa fuga exercitationem aspernatur reiciendis, est veniam ducimus excepturi expedita doloribus veritatis!</P>
      </Main>
    </div>
    
  )
}