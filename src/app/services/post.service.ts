import { Injectable } from '@angular/core';
import { Post, PostItem } from '../models/post';
import { config } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  BaseUrl: string;

  getPost(id: string) {
    try {
      if (id != '001') return null;

      const postPage: Post = {
        id: '001',
        name: '[Review] ปาฏิหาริย์ร้านชำของคุณนามิยะ',
        cover: config.IMAGE_URL + '%2Fauth.png?alt=media&token=bb7874b5-34c1-427e-a936-44962fa774d4',
        short_description: '',
        description: `
        หลังจากที่ดองมานานก็อ่านจนจบไปอีกเล่ม...
    
    หนังสือเล่มนี้จะเป็นการเล่าเรื่องราวของร้านชำแห่งหนึ่งที่เคยรับปรึกษาปัญหาคนอื่นผ่านทางจดหมาย จนกระทั่งเจ้าของร้าน คุณนามิยะได้จากโลกไป… <br>
    
    จนกระทั่งวันหนึ่ง ได้มีโจรทั้งสามมาหลบซ่อนในบ้านร้างหลังนี้และพบว่ามีคนส่งจดหมายเพื่อของคำปรึกษา (?)  <br>ทั้งสามจึงลองตอบจดหมายเล่นๆไป แต่ทำให้พบว่าจดหมายนั้นถูกส่งกลับไปในช่วงเวลา 40 ปีก่อนนั่นเอง.. <br>
    
    โดยหนังสือเล่มนี้จะเล่าถึงเรื่องราวต่างๆ ของผู้คนหลากหลาย ที่ได้ส่งจดหมายมาทำการปรึกษาที่ร้านชำแห่งนี้ในต่างช่วงเวลากัน ไม่ว่าจะเรื่องเล็กๆ หรือเรื่องใหญ่ก็ตาม<br>
    
    ในจุดเด่นของหนังสือเรื่องนี้คือการเชื่อมโยงเรื่องราวหลากหลายอย่างมีชั้นเชิงและน่าสนใจ  <br>ทุกบทจะมีความเชื่อมโยงกันตลอดเวลาโดยมีร้านชำนามิยะอยู่เป็นจุดศูนย์กลาง <br>ตัวละครหรือเรื่องราวผู้คนที่ได้ส่งจดหมาย เรื่องราวของคุณนามิยะหรือแม้กระทั่งกลุ่มโจรก็ต่างมีมิติที่น่าสนใจ <br>มีการอธิบายเหตุและผลของการกระทำต่างๆ ได้อย่างชัดเจน ทำให้ผู้อ่านได้คิดตามตลอดเวลาว่าการกระทำของตัวละครนั้นๆ <br>เป็นสิ่งที่เหมาะสมหรือควรกระทำหรือไม่<br>
    
    ถึงแม้จะมีข้อดีมากมาย ในมุมมองผมก็ยังมองว่ายังมีบางจุดที่นับเป็นข้อเสียได้เช่นกัน เช่น เนื้อเรื่องบางจุดที่มีการเรียบเรียงได้น่าเบื่อมากเกินไป รายละเอียดไม่จำเป็นในบางจุด การจบปลายเปิดจนเกินไป <br>หรือตอนจบที่ไม่ทำให้ผู้อ่านรู้สึกอิมแพคพอเท่าเนื้อเรื่องหลัก (อันนี้รสนิยมส่วนตัวชัดๆ)<br>
    
    สรุปแล้วโดยรวมนับว่าเป็นหนังสือที่ดี ควรค่าแก่การอ่าน มีเนื้อเรื่องของตัวละครมีมิติ <br>เรื่องราวของตัวละครสะท้อนปัญหาหลายๆ ด้านของสังคม รวมถึงให้ข้อคิดแก่ผู้อ่านได้หลายหลายด้วย<br>
    
    ดังนั้นแล้ว ไปซื้อมาอ่านเถอะ ถ้าคุณไม่รู้จะอ่านอะไร<br><br>
    
    #ปาฏิหาริย์ร้านชำของคุณนามิยะ
        `,
        categories: [
          'book', 'fantasy', 'novel'
        ],
        url: '/page/001',
        is_actived: true,
        created_by: '',
        created_date: new Date(),
        updated_by: '',
        updated_date: new Date()
      };

      return postPage;
    } catch (error) {
      return error;
    }
  }

  getPostList() {
    try {
      const image = config.IMAGE_URL + '%2Fauth.png?alt=media&token=bb7874b5-34c1-427e-a936-44962fa774d4';
      const postList: PostItem[] = [
        new PostItem('001', '[Review] ปาฏิหาริย์ร้านชำของคุณนามิยะ', image, 'lod asdfnbfbbwekjbnn', [], '/page/001', new Date()),
        new PostItem('002', 'Test sad ddv fweItem 002', image, 'lovvd asdfnsgfdsdgbfbbwekjbnn', [], '/page/002', new Date()),
        new PostItem('003', 'Test Ite vsdvvvm 003', image, 'lordvd gsbqeee', [], '/page/003', new Date()),
        new PostItem('004', 'Test Item ddsfe welf 004', image, 'losavsdd asdfnsdvdvbfbbwekjbnn', [], '/page/004', new Date())
      ];

      return postList;
    } catch (error) {
      return error;
    }
  }

}
