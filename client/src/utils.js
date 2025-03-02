export function toThai(msg) {
    if (msg == 'All fields are required') return 'จำเป็นต้องกรอกข้อมูลทุกช่อง';
    else if (msg == 'User already exists') return 'มีชื่อผู้ใช้นี้อยู่แล้ว';
    else if (msg == 'User not found') return 'ไม่พบชื่อผู้ใช้';
    else if (msg == 'Inccorect password') return 'รหัสผ่านไม่ถูกต้อง';
    else if (msg == 'Internal server error') return 'server ขัดข้อง';
    else return msg;
}