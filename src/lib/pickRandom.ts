// 配列からランダムに一見選択して返す。
// 空配列の場合は null を返す。
// @param items 選択対象の配列
// @returuns ランダムに選ばれた要素、または null
// Tは後から肩を定義できる。
// data/tasks.tsではTask型を定義してitemsにTask型を指定している。
export function pickRandom<T>(items: T[]): T | null {
    if (items.length === 0) return null;
    return items[Math.floor(Math.random() * items.length)];

}