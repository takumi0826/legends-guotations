import { PrismaClient, Prisma } from '@prisma/client';
import { CreateLegendDto } from 'src/legends/dto/create-legend.dto';
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const legend = [
  { id: 1, meigen: '生きてるだけで丸儲け', name: '明石家さんま' },
  {
    id: 2,
    meigen:
      '結果が出ないとき、どういう自分でいられるか。決してあきらめない姿勢が何を生み出すきっかけをつくる',
    name: 'イチロー',
  },
  { id: 3, meigen: '嫌がるのはもう撮れてるからw', name: '木梨憲武' },
  { id: 4, meigen: '濱家体毛薄そうなのに足の毛バリ濃くて草', name: '匿名' },
  {
    id: 5,
    meigen: '人はそれぞれ事情をかかえ、平然と生きている',
    name: '伊集院静',
  },
  {
    id: 6,
    meigen: 'いつか、必ず、チャンスの順番が来ると信じなさい',
    name: '秋元康',
  },
  {
    id: 7,
    meigen: '人を信じよ、しかし、その百倍も自らを信じよ',
    name: '手塚治虫',
  },
  {
    id: 8,
    meigen: 'しないではいられないことを、 し続けなさい',
    name: '水木しげる',
  },
  {
    id: 9,
    meigen:
      '努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない',
    name: '王貞治',
  },
  {
    id: 10,
    meigen: '結果にこだわるな、成功にこだわるな、成長にこだわれ',
    name: '本田圭佑',
  },
  {
    id: 11,
    meigen: '勝ち負けなんかちっぽけなこと。大事なことは本気だったかどうかだ',
    name: '松岡修造',
  },
  {
    id: 12,
    meigen: '自己犠牲を厭わない人には、信頼が集まる',
    name: '野村克也',
  },
  { id: 13, meigen: '俺は寝ている時は、真面目だよ', name: '高田純次' },
  {
    id: 14,
    meigen: '自分を少し抑えて、肩の力を抜けば、仕事は長続きする',
    name: '関根勤',
  },
  {
    id: 15,
    meigen:
      '努力ってのは宝くじみたいなものだよ。買っても当たるかどうかはわからないけど、買わなきゃ当たらない',
    name: 'ビートたけし',
  },
  {
    id: 16,
    meigen: '下積みはつらくなかった。だって好きなことだから',
    name: '石橋貴明',
  },
  { id: 17, meigen: '明日死ぬとしても笑うわ', name: '松本人志' },
  {
    id: 18,
    meigen: '俺はこの先お笑い一本で考えていない。相方が偉大すぎて',
    name: '浜田雅功',
  },
  {
    id: 19,
    meigen: '人生というのは、失うものを増やしていくゲームなんだ',
    name: '矢沢永吉',
  },
  {
    id: 20,
    meigen:
      'あんまり若いうちからしっかりしすぎちゃダメよ。嫌なときは仕事バックれちゃったりとかしていいのよ',
    name: 'マツコ・デラックス',
  },
];

const parent = [
  {
    id: 1,
    name: '芸能人',
    delFlag: 0,
  },
  {
    id: 2,
    name: '芸人・タレント',
    delFlag: 0,
  },
  {
    id: 3,
    name: 'アスリート',
    delFlag: 0,
  },
  {
    id: 4,
    name: 'クリエイター',
    delFlag: 0,
  },
  {
    id: 99,
    name: '匿名',
    delFlag: 0,
  },
];

const category = [
  {
    name: '芸能人',
    delFlag: 0,
    parentId: 1,
  },
  {
    name: '歌手',
    delFlag: 0,
    parentId: 1,
  },
  {
    name: '芸人・タレント',
    delFlag: 0,
    parentId: 2,
  },
  {
    name: 'プロ野球選手',
    delFlag: 0,
    parentId: 3,
  },
  {
    name: 'サッカー選手',
    delFlag: 0,
    parentId: 3,
  },
  {
    name: 'テニス選手',
    delFlag: 0,
    parentId: 3,
  },
  {
    name: '陸上選手',
    delFlag: 0,
    parentId: 3,
  },
  {
    name: '漫画家',
    delFlag: 0,
    parentId: 4,
  },
  {
    name: '作家',
    delFlag: 0,
    parentId: 4,
  },
  {
    name: '作詞家',
    delFlag: 0,
    parentId: 4,
  },
  {
    name: '匿名',
    delFlag: 0,
    parentId: 99,
  },
];

const legendCategory = [
  {
    legendId: 1,
    categoryId: 5,
  },
  {
    legendId: 2,
    categoryId: 2,
  },
  {
    legendId: 3,
    categoryId: 5,
  },
  {
    legendId: 4,
    categoryId: 9,
  },
  {
    legendId: 5,
    categoryId: 6,
  },
  {
    legendId: 5,
    categoryId: 7,
  },
  {
    legendId: 6,
    categoryId: 7,
  },
  {
    legendId: 7,
    categoryId: 8,
  },
  {
    legendId: 8,
    categoryId: 8,
  },
  {
    legendId: 9,
    categoryId: 2,
  },
  {
    legendId: 10,
    categoryId: 4,
  },
  {
    legendId: 11,
    categoryId: 10,
  },
  {
    legendId: 12,
    categoryId: 2,
  },
  {
    legendId: 13,
    categoryId: 5,
  },
  {
    legendId: 14,
    categoryId: 5,
  },
  {
    legendId: 15,
    categoryId: 5,
  },
  {
    legendId: 16,
    categoryId: 5,
  },
  {
    legendId: 17,
    categoryId: 5,
  },
  {
    legendId: 18,
    categoryId: 5,
  },
  {
    legendId: 19,
    categoryId: 3,
  },
  {
    legendId: 20,
    categoryId: 1,
  },
];

const transfer = async () => {
  return await prisma.$transaction(async () => {
    await prisma.legend.createMany({ data: legend });
    await prisma.parent_category.createMany({ data: parent });
    await prisma.category.createMany({ data: category });
    return await prisma.legend_category.createMany({ data: legendCategory });
  });
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`);

  await transfer();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
