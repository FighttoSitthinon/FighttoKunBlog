import { Injectable } from '@angular/core';
import { Post, PostItem } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPost(id: string) {
    try {
      if (id != '001') return null;

      const postPage: Post = {
        id: '001',
        name: '[Review] ปาฏิหาริย์ร้านชำของคุณนามิยะ',
        cover: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/45290510_1942078109232621_3971563800573771776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeF4jp5W1mp3MGKGic25SIG1fCZ_HcgWazl8Jn8dyBZrOWD_6koYSqL15JL9VOMMRVoPwPe9xrGTULVwridEeMVQ&_nc_ohc=Pvyrhzh9PYMAX-cZJq0&_nc_ht=scontent.fbkk5-7.fna&oh=fea844daeba508274d6f587855a15f7c&oe=60183B4B',
        short_description: '',
        description: `
        หลังจากที่ดองมานานก็อ่านจนจบไปอีกเล่ม...
    
    หนังสือเล่มนี้จะเป็นการเล่าเรื่องราวของร้านชำแห่งหนึ่งที่เคยรับปรึกษาปัญหาคนอื่นผ่านทางจดหมาย จนกระทั่งเจ้าของร้าน คุณนามิยะได้จากโลกไป…
    
    จนกระทั่งวันหนึ่ง ได้มีโจรทั้งสามมาหลบซ่อนในบ้านร้างหลังนี้และพบว่ามีคนส่งจดหมายเพื่อของคำปรึกษา (?) ทั้งสามจึงลองตอบจดหมายเล่นๆไป แต่ทำให้พบว่าจดหมายนั้นถูกส่งกลับไปในช่วงเวลา 40 ปีก่อนนั่นเอง..
    
    โดยหนังสือเล่มนี้จะเล่าถึงเรื่องราวต่างๆ ของผู้คนหลากหลาย ที่ได้ส่งจดหมายมาทำการปรึกษาที่ร้านชำแห่งนี้ในต่างช่วงเวลากัน ไม่ว่าจะเรื่องเล็กๆ หรือเรื่องใหญ่ก็ตาม
    
    ในจุดเด่นของหนังสือเรื่องนี้คือการเชื่อมโยงเรื่องราวหลากหลายอย่างมีชั้นเชิงและน่าสนใจ ทุกบทจะมีความเชื่อมโยงกันตลอดเวลาโดยมีร้านชำนามิยะอยู่เป็นจุดศูนย์กลาง ตัวละครหรือเรื่องราวผู้คนที่ได้ส่งจดหมาย เรื่องราวของคุณนามิยะหรือแม้กระทั่งกลุ่มโจรก็ต่างมีมิติที่น่าสนใจ มีการอธิบายเหตุและผลของการกระทำต่างๆ ได้อย่างชัดเจน ทำให้ผู้อ่านได้คิดตามตลอดเวลาว่าการกระทำของตัวละครนั้นๆ เป็นสิ่งที่เหมาะสมหรือควรกระทำหรือไม่
    
    ถึงแม้จะมีข้อดีมากมาย ในมุมมองผมก็ยังมองว่ายังมีบางจุดที่นับเป็นข้อเสียได้เช่นกัน เช่น เนื้อเรื่องบางจุดที่มีการเรียบเรียงได้น่าเบื่อมากเกินไป รายละเอียดไม่จำเป็นในบางจุด การจบปลายเปิดจนเกินไป หรือตอนจบที่ไม่ทำให้ผู้อ่านรู้สึกอิมแพคพอเท่าเนื้อเรื่องหลัก (อันนี้รสนิยมส่วนตัวชัดๆ)
    
    สรุปแล้วโดยรวมนับว่าเป็นหนังสือที่ดี ควรค่าแก่การอ่าน มีเนื้อเรื่องของตัวละครมีมิติ เรื่องราวของตัวละครสะท้อนปัญหาหลายๆ ด้านของสังคม รวมถึงให้ข้อคิดแก่ผู้อ่านได้หลายหลายด้วย
    
    ดังนั้นแล้ว ไปซื้อมาอ่านเถอะ ถ้าคุณไม่รู้จะอ่านอะไร
    
    #ปาฏิหาริย์ร้านชำของคุณนามิยะ
        `,
        categories: [
          'book', 'fantasy', 'novel'
        ],
        url: '/page/001',
        isActived: true,
        createdBy: '',
        createdDate: new Date(),
        updatedBy: '',
        updatedDate: new Date()
      };

      return postPage;
    } catch (error) {
      return error;
    }
  }

  getPostList() {
    try {
      
      const postList: PostItem[] = [
        new PostItem('001', '[Review] ปาฏิหาริย์ร้านชำของคุณนามิยะ', 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/45290510_1942078109232621_3971563800573771776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeF4jp5W1mp3MGKGic25SIG1fCZ_HcgWazl8Jn8dyBZrOWD_6koYSqL15JL9VOMMRVoPwPe9xrGTULVwridEeMVQ&_nc_ohc=Pvyrhzh9PYMAX-cZJq0&_nc_ht=scontent.fbkk5-7.fna&oh=fea844daeba508274d6f587855a15f7c&oe=60183B4B', 'lod asdfnbfbbwekjbnn', [], '/page/001', new Date()),
        new PostItem('002', 'Test Item 002', '', 'lovvd asdfnsgfdsdgbfbbwekjbnn', [], '/page/002', new Date()),
        new PostItem('003', 'Test Item 003', '', 'lordvd gsbqeee', [], '/page/003', new Date()),
        new PostItem('004', 'Test Item 004', '', 'losavsdd asdfnsdvdvbfbbwekjbnn', [], '/page/004', new Date())
      ];

      return postList;
    } catch (error) {
      return error;
    }
  }

}
