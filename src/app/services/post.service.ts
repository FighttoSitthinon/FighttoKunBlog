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
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        cover: config.IMAGE_URL + 'mockup01.jpg?alt=media',
        short_description: '',
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error! <br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptas sed culpa perspiciatis eum suscipit rerum odit nobis accusantium. Quae corporis expedita, ut minus incidunt molestiae ex vero in reiciendis id vitae excepturi, harum, tenetur doloremque fuga accusamus tempora mollitia cum! Perspiciatis natus a dolore ullam corrupti, modi eos iure aspernatur aliquam itaque maxime porro suscipit totam omnis temporibus eligendi voluptatum corporis tenetur reprehenderit! Vero deleniti magni aliquam. Eligendi expedita aut nemo vel vero necessitatibus vitae ut sunt officiis. Ab, a error culpa sunt ipsam iure dolores ut obcaecati architecto voluptatibus, consequatur quae deserunt! Maiores provident hic facilis similique ipsa neque, tenetur culpa? Similique quo rerum cumque sit dolorem commodi impedit assumenda dolore sapiente ab, ipsam dicta aliquam, architecto autem ipsum pariatur explicabo deserunt molestiae quia vel. Quidem consequuntur eius dignissimos dicta dolores? Ducimus, adipisci magnam sapiente architecto necessitatibus officiis repellat! Praesentium obcaecati sunt dicta, harum ratione vitae nisi laboriosam quia non, saepe ab voluptas sint quae totam iusto hic. Aperiam quod iste possimus est voluptatibus mollitia maiores libero rem corrupti iure veniam, odio exercitationem deleniti sequi, optio officia, nesciunt labore delectus eos nisi nostrum incidunt? Quia, nihil. Corrupti placeat suscipit, corporis accusamus vitae voluptas earum esse hic expedita quaerat possimus. Vero enim dignissimos blanditiis doloremque modi eligendi illo, non laboriosam ad assumenda perspiciatis deserunt dolores consequatur, quo explicabo. Blanditiis quia aliquam asperiores incidunt culpa, numquam ipsam dolorem nemo corporis. Voluptates, possimus iste corporis exercitationem eius quasi aut fuga sunt. Quos iste assumenda adipisci nihil, nostrum officia, quis suscipit corrupti error architecto quod dolore! Non magni voluptatibus fuga ab nam, laboriosam quas ea at saepe eveniet consequuntur perspiciatis odit dolorum deserunt suscipit quam? Sapiente cumque cupiditate a nisi deserunt? Et, a illum saepe mollitia debitis ullam architecto, dolorem, facere quo doloribus voluptates suscipit rerum vitae repellendus sit? Consectetur dolore, magnam qui fugiat esse perspiciatis quo natus! Totam est tempora error sapiente molestiae dolores eum quas nam voluptates voluptate deleniti inventore, ipsum impedit consectetur doloribus, ipsa aut natus. Velit beatae modi voluptatem itaque asperiores ipsa placeat sapiente quaerat molestias nam maxime voluptatibus ullam qui iusto ipsam, temporibus libero labore neque eum accusantium repellendus quae fugiat alias. Eos aliquam, quas fugit assumenda beatae dolorem. Repellendus animi asperiores maxime perferendis voluptates! Nisi, in, accusamus quibusdam repellendus ducimus voluptate porro optio dicta ab reprehenderit hic quas similique ipsam error eos eum eligendi nemo quam libero! Exercitationem at, quibusdam maiores aspernatur culpa, voluptatibus dignissimos iusto harum facilis veniam quos deleniti ut dolores soluta delectus atque ipsum, fugiat aliquid eveniet consectetur! Reprehenderit dolore aspernatur fugit nostrum, quae nihil debitis ex delectus dicta ab beatae nobis molestiae corporis itaque culpa neque molestias error blanditiis nisi aut? Blanditiis voluptatum cum excepturi aspernatur doloribus totam ipsa quidem reiciendis magnam autem, voluptates qui dolore ducimus, odit et dignissimos! Vel, corporis. Repudiandae corrupti magnam delectus quos quasi amet error id veniam laboriosam, ullam nobis quas omnis, odio quibusdam natus, dolor recusandae temporibus officiis nam. Recusandae commodi minus fuga ipsa possimus voluptatibus labore harum id nisi quia nulla quae, dolore ut laboriosam unde aliquam placeat! Placeat molestias quo quisquam voluptas dolorem aspernatur obcaecati molestiae fugiat explicabo temporibus sequi id a quos ipsam aut aperiam nulla nihil aliquid porro, rem laudantium? Iure ipsa, distinctio eligendi commodi amet facilis iusto non! Itaque, accusamus quas quo alias tempore nostrum modi incidunt dicta eligendi molestiae rerum? Qui, id officiis quo doloribus ratione iusto explicabo tempore eaque dolores laboriosam corrupti soluta? Optio iste delectus alias, debitis quod animi quae vel repellendus illo libero asperiores. Neque dignissimos, necessitatibus repellat in similique iure quaerat velit odio mollitia laborum nihil impedit harum architecto sunt commodi error accusamus enim incidunt ea maxime assumenda tempora eligendi. Quisquam saepe esse quo, eum omnis consectetur, sequi fugit repellendus hic iusto similique iure rerum accusantium cumque eveniet, veritatis doloremque illum ab ipsa sit? Facere possimus explicabo quae tempora aut, aspernatur autem non eligendi odio voluptates quam totam dicta sequi a, aliquid eius rerum ipsum accusamus accusantium, ab reiciendis magni sed odit! Ipsa, placeat architecto eos officiis quas, voluptas hic voluptatem deserunt ducimus facere, quam delectus at possimus qui expedita fugiat mollitia veritatis inventore explicabo ut iste? Sequi consequatur aperiam deleniti earum velit, mollitia numquam qui accusamus adipisci autem porro consectetur modi minus pariatur amet nostrum aspernatur, possimus incidunt rem omnis esse odio nemo. Facilis sit quasi optio sapiente quod, voluptatum dolorum esse excepturi cum? Voluptas, ea iste. Consectetur accusantium odit at libero obcaecati dicta minima, sit amet suscipit ad illum nobis! Eum cum sapiente corporis culpa ratione laboriosam, distinctio rerum fugiat, iste magni ducimus molestias. Perspiciatis culpa officiis vel provident dolorum minus fugiat deserunt ipsam et, quam necessitatibus eum expedita officia iure iusto obcaecati ipsa architecto incidunt corporis iste saepe. Quidem atque tempore vero, consequatur unde ratione in eligendi iure facilis dolor blanditiis totam rerum quia repudiandae cum dolorum iusto eos sequi! Expedita ipsam facere quaerat nam beatae culpa laborum amet? Id tenetur ipsam eveniet optio, labore alias in deserunt eius illo architecto quae dolore consectetur ipsum magnam sapiente et incidunt ullam, minima harum, ducimus culpa aspernatur delectus. Obcaecati quam officia ad cupiditate harum. Eveniet quibusdam officia recusandae impedit vero sunt ipsam illo maiores modi omnis et dolorem voluptatum quia, iste necessitatibus architecto? Delectus sequi pariatur id neque at dignissimos. Tempora, porro sit? Vero error asperiores nulla eveniet necessitatibus quas minima cupiditate? Voluptatem ipsam porro ea consequuntur perspiciatis accusamus facilis, impedit numquam neque tempore asperiores fugiat vero dolor esse at itaque ipsum alias debitis voluptate. Necessitatibus temporibus excepturi repudiandae ipsum quos, autem laborum? Consequuntur, sint sapiente minima quibusdam illum dolorem officia architecto blanditiis modi, exercitationem earum. Eum laboriosam itaque, iusto autem asperiores dolorem? Quod, mollitia. Voluptas, ipsum, officia quod at totam aut et consequatur eligendi eaque nisi reprehenderit tenetur accusantium commodi, sint soluta modi. Tempora soluta ab accusantium laudantium vel cumque neque, earum obcaecati dolorum error officiis laborum. Exercitationem illo ad ut nulla corporis distinctio porro, autem eum. Nemo, minus veritatis veniam fuga, nulla esse voluptate, minima asperiores soluta culpa temporibus. Voluptas vitae modi officia labore, nihil dolorem nesciunt ullam ex unde. Quod, facilis iusto?
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
      const image = config.IMAGE_URL + 'mockup01.jpg?alt=media';
      const postList: PostItem[] = [
        new PostItem('001', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image,
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!',
          ['book', 'fantasy', 'novel'],
          '/page/001',
          new Date()),
        new PostItem('002', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image,
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!',
          ['book', 'fantasy', 'novel'],
          '/page/001',
          new Date()),
        new PostItem('003', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image,
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!',
          ['book', 'fantasy', 'novel'],
          '/page/001',
          new Date()),
        new PostItem('004', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image,
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!',
          ['book', 'fantasy', 'novel'],
          '/page/001',
          new Date()),
        new PostItem('005', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image,
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!',
          ['book', 'fantasy', 'novel'],
          '/page/001',
          new Date()),
        new PostItem('006', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image,
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil ea ipsum nostrum perferendis, doloremque quo ratione saepe omnis animi perspiciatis similique consequatur molestiae sunt esse ex minus ullam error!',
          ['book', 'fantasy', 'novel'],
          '/page/001',
          new Date()),
      ];

      return postList;
    } catch (error) {
      return error;
    }
  }

}
