/**
 *
 * @returns string
 */

export default function getRandomItem() {
  const index = Math.floor(DB.length * Math.random());
  const item = DB[index];
  return `${item.id} (${item.name})`;
}

const DB = [
  { id: 'specialweek', name: 'スペシャルウィーク' },
  { id: 'silencesuzuka', name: 'サイレンススズカ' },
  { id: 'tokaiteio', name: 'トウカイテイオー' },
  { id: 'maruzensky', name: 'マルゼンスキー' },
  { id: 'fujikiseki', name: 'フジキセキ' },
  { id: 'oguricap', name: 'オグリキャップ' },
  { id: 'goldship', name: 'ゴールドシップ' },
  { id: 'vodka', name: 'ウオッカ' },
  { id: 'daiwascarlet', name: 'ダイワスカーレット' },
  { id: 'taikishuttle', name: 'タイキシャトル' },
  { id: 'grasswonder', name: 'グラスワンダー' },
  { id: 'hishiamazon', name: 'ヒシアマゾン' },
  { id: 'mejiromcqueen', name: 'メジロマックイーン' },
  { id: 'elcondorpasa', name: 'エルコンドルパサー' },
  { id: 'tmoperao', name: 'テイエムオペラオー' },
  { id: 'naritabrian', name: 'ナリタブライアン' },
  { id: 'symbolirudolf', name: 'シンボリルドルフ' },
  { id: 'airgroove', name: 'エアグルーヴ' },
  { id: 'agnesdigital', name: 'アグネスデジタル' },
  { id: 'seiunsky', name: 'セイウンスカイ' },
  { id: 'tamamocross', name: 'タマモクロス' },
  { id: 'finemotion', name: 'ファインモーション' },
  { id: 'biwahayahide', name: 'ビワハヤヒデ' },
  { id: 'mayanotopgun', name: 'マヤノトップガン' },
  { id: 'manhattancafe', name: 'マンハッタンカフェ' },
  { id: 'mihonobourbon', name: 'ミホノブルボン' },
  { id: 'mejiroryan', name: 'メジロライアン' },
  { id: 'hishiakebono', name: 'ヒシアケボノ' },
  { id: 'yukinobijin', name: 'ユキノビジン' },
  { id: 'riceshower', name: 'ライスシャワー' },
  { id: 'inesfujin', name: 'アイネスフウジン' },
  { id: 'agnestachyon', name: 'アグネスタキオン' },
  { id: 'admirevega', name: 'アドマイヤベガ' },
  { id: 'inarione', name: 'イナリワン' },
  { id: 'winningticket', name: 'ウイニングチケット' },
  { id: 'airshakur', name: 'エアシャカール' },
  { id: 'eishinflash', name: 'エイシンフラッシュ' },
  { id: 'currenchan', name: 'カレンチャン' },
  { id: 'kawakamiprincess', name: 'カワカミプリンセス' },
  { id: 'goldcity', name: 'ゴールドシチー' },
  { id: 'sakurabakushino', name: 'サクラバクシンオー' },
  { id: 'seekingthepearl', name: 'シーキングザパール' },
  { id: 'shinkowindy', name: 'シンコウウインディ' },
  { id: 'sweeptosho', name: 'スイープトウショウ' },
  { id: 'supercreek', name: 'スーパークリーク' },
  { id: 'smartfalcon', name: 'スマートファルコン' },
  { id: 'zennorobroy', name: 'ゼンノロブロイ' },
  { id: 'tosenjordan', name: 'トーセンジョーダン' },
  { id: 'nakayamafesta', name: 'ナカヤマフェスタ' },
  { id: 'naritataishin', name: 'ナリタタイシン' },
  { id: 'nishinoflower', name: 'ニシノフラワー' },
  { id: 'haruurara', name: 'ハルウララ' },
  { id: 'bamboomemory', name: 'バンブーメモリー' },
  { id: 'bikopegasus', name: 'ビコーペガサス' },
  { id: 'marveloussunday', name: 'マーベラスサンデー' },
  { id: 'matikanefukukitaru', name: 'マチカネフクキタル' },
  { id: 'mrcb', name: 'ミスターシービー' },
  { id: 'meishodoto', name: 'メイショウドトウ' },
  { id: 'mejirodober', name: 'メジロドーベル' },
  { id: 'nicenature', name: 'ナイスネイチャ' },
  { id: 'kinghalo', name: 'キングヘイロー' },
  { id: 'matikanetannhauser', name: 'マチカネタンホイザ' },
  { id: 'ikunodictus', name: 'イクノディクタス' },
  { id: 'mejiropalmer', name: 'メジロパーマー' },
  { id: 'daitakuhelios', name: 'ダイタクヘリオス' },
  { id: 'twinturbo', name: 'ツインターボ' },
  { id: 'satonodiamond', name: 'サトノダイヤモンド' },
  { id: 'kitasanblack', name: 'キタサンブラック' },
  { id: 'sakurachiyonoo', name: 'サクラチヨノオー' },
  { id: 'siriussymboli', name: 'シリウスシンボリ' },
  { id: 'mejiroardan', name: 'メジロアルダン' },
  { id: 'yaenomuteki', name: 'ヤエノムテキ' },
  { id: 'tsurumarutsuyoshi', name: 'ツルマルツヨシ' },
  { id: 'mejirobright', name: 'メジロブライト' },
  { id: 'daringtact', name: 'デアリングタクト' },
  { id: 'sakuralaurel', name: 'サクラローレル' },
  { id: 'naritatoproad', name: 'ナリタトップロード' },
  { id: 'yamaninzephyr', name: 'ヤマニンゼファー' },
  { id: 'symbolikriss', name: 'シンボリクリスエス' },
  { id: 'taninogimlet', name: 'タニノギムレット' },
  { id: 'daiichiruby', name: 'ダイイチルビー' },
  { id: 'mejiroramonu', name: 'メジロラモーヌ' },
  { id: 'astonmachan', name: 'アストンマーチャン' },
  { id: 'satonocrown', name: 'サトノクラウン' },
  { id: 'chevalgrand', name: 'シュヴァルグラン' },
  { id: 'k.s.miracle', name: 'ケイエスミラクル' },
  { id: 'copanorickey', name: 'コパノリッキー' },
  { id: 'hokkotarumae', name: 'ホッコータルマエ' },
  { id: 'wonderacute', name: 'ワンダーアキュート' },
];
