import { PrismaClient, Prisma } from '@prisma/client';
import { CreateLegendDto } from 'src/legends/dto/create-legend.dto';
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const legend = [
  { meigen: '生きてるだけで丸儲け', name: '明石家さんま' },
  {
    meigen:
      '結果が出ないとき、どういう自分でいられるか。決してあきらめない姿勢が何を生み出すきっかけをつくる',
    name: 'イチロー',
  },
  { meigen: '嫌がるのはもう撮れてるからw', name: '木梨憲武' },
  { meigen: '濱家体毛薄そうなのに足の毛バリ濃くて草', name: '匿名' },
  {
    meigen: '人はそれぞれ事情をかかえ、平然と生きている',
    name: '伊集院静',
  },
  {
    meigen: 'いつか、必ず、チャンスの順番が来ると信じなさい',
    name: '秋元康',
  },
  {
    meigen: '人を信じよ、しかし、その百倍も自らを信じよ',
    name: '手塚治虫',
  },
  {
    meigen: 'しないではいられないことを、 し続けなさい',
    name: '水木しげる',
  },
  {
    meigen:
      '努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない',
    name: '王貞治',
  },
  {
    meigen: '結果にこだわるな、成功にこだわるな、成長にこだわれ',
    name: '本田圭佑',
  },
  {
    meigen: '勝ち負けなんかちっぽけなこと。大事なことは本気だったかどうかだ',
    name: '松岡修造',
  },
  {
    meigen: '自己犠牲を厭わない人には、信頼が集まる',
    name: '野村克也',
  },
  { meigen: '俺は寝ている時は、真面目だよ', name: '高田純次' },
  {
    meigen: '自分を少し抑えて、肩の力を抜けば、仕事は長続きする',
    name: '関根勤',
  },
  {
    meigen:
      '努力ってのは宝くじみたいなものだよ。買っても当たるかどうかはわからないけど、買わなきゃ当たらない',
    name: 'ビートたけし',
  },
  {
    meigen: '下積みはつらくなかった。だって好きなことだから',
    name: '石橋貴明',
  },
  { meigen: '明日死ぬとしても笑うわ', name: '松本人志' },
  {
    meigen: '俺はこの先お笑い一本で考えていない。相方が偉大すぎて',
    name: '浜田雅功',
  },
  {
    meigen: '人生というのは、失うものを増やしていくゲームなんだ',
    name: '矢沢永吉',
  },
  {
    meigen:
      'あんまり若いうちからしっかりしすぎちゃダメよ。嫌なときは仕事バックれちゃったりとかしていいのよ',
    name: 'マツコ・デラックス',
  },
].map((v, index) => ({ id: index + 1, name: v.name, meigen: v.meigen }));

const parent = [
  {
    name: '芸能人',
  },
  {
    name: '芸人・タレント',
  },
  {
    name: 'アスリート',
  },
  {
    name: 'クリエイター',
  },
  {
    name: 'その他',
  },
].map((v, index) => ({ id: index + 1, name: v.name, delFlag: 0 }));

const category = [
  {
    name: '芸能人',
    parentId: 1,
  },
  {
    name: '歌手',
    parentId: 1,
  },
  {
    name: '芸人・タレント',
    parentId: 2,
  },
  {
    name: 'プロ野球選手',
    parentId: 3,
  },
  {
    name: 'サッカー選手',
    parentId: 3,
  },
  {
    name: 'テニス選手',
    parentId: 3,
  },
  {
    name: '陸上選手',
    parentId: 3,
  },
  {
    name: '漫画家',
    parentId: 4,
  },
  {
    name: '作家',
    parentId: 4,
  },
  {
    name: '作詞家',
    parentId: 4,
  },
  {
    name: 'その他',
    parentId: parent.length,
  },
].map((v, index) => ({
  id: index + 1,
  name: v.name,
  delFlag: 0,
  parentId: v.parentId,
}));

const legendCategory = [
  {
    legendId: 1,
    categoryId: 3,
  },
  {
    legendId: 2,
    categoryId: 4,
  },
  {
    legendId: 3,
    categoryId: 3,
  },
  {
    legendId: 4,
    categoryId: category.length,
  },
  {
    legendId: 5,
    categoryId: 9,
  },
  {
    legendId: 5,
    categoryId: 10,
  },
  {
    legendId: 6,
    categoryId: 10,
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
    categoryId: 4,
  },
  {
    legendId: 10,
    categoryId: 5,
  },
  {
    legendId: 11,
    categoryId: 6,
  },
  {
    legendId: 12,
    categoryId: 4,
  },
  {
    legendId: 13,
    categoryId: 3,
  },
  {
    legendId: 14,
    categoryId: 3,
  },
  {
    legendId: 15,
    categoryId: 3,
  },
  {
    legendId: 16,
    categoryId: 3,
  },
  {
    legendId: 17,
    categoryId: 3,
  },
  {
    legendId: 18,
    categoryId: 3,
  },
  {
    legendId: 19,
    categoryId: 2,
  },
  {
    legendId: 20,
    categoryId: 1,
  },
];

const dataLegend = [...Array(100)].map((v, i) => {
  return {
    meigen: `テストデータ名言${i}`,
    name: `No.${i}: テストデータ`,
  };
});

const dataLC = [...Array(100)].map((v, i) => {
  return {
    legendId: 21 + i,
    categoryId: Math.floor(Math.random() * 10 + 1),
  };
});

const transfer = async () => {
  return await prisma.$transaction(async () => {
    await prisma.legend.createMany({ data: [...legend, ...dataLegend] });
    await prisma.parent_category.createMany({ data: parent });
    await prisma.category.createMany({ data: category });
    return await prisma.legend_category.createMany({
      data: [...legendCategory, ...dataLC],
    });
  });
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`初期データ登録開始`);

  await transfer();

  console.log(`初期データ登録終了`);
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
