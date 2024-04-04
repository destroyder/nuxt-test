export const useBingoCard = defineStore("bingoCard", () => {
  const bingoCardArray = ref<number[]>([]);
  const mergedArray = ref<number[][]>([]);
  const hitArray = useState("hitArray_state", () => mergedArray);

  // ビンゴカードの配列生成
  async function bingoCardGene() {
    bingoCardArray.value = Array.from({ length: 25 }, (_, index) => index + 1);
    // bingoCardをランダムに並び替える
    bingoCardArray.value.sort(() => Math.random() - 0.5);
    await bingoHitCardGene();
  }

  // ビンゴ当たりカードの配列生成
  async function bingoHitCardGene() {
    const rows: number[][] = [];
    const columns: number[][] = [[], [], [], [], []];
    const diagonals: number[][] = [[], []];

    for (let i = 0; i < bingoCardArray.value.length; i++) {
      const bingo = bingoCardArray.value[i];
      const rowIdx = Math.floor(i / 5);
      const colIdx = i % 5;

      rows[rowIdx] = rows[rowIdx] || [];
      rows[rowIdx].push(bingo);

      columns[colIdx].push(bingo);

      if (rowIdx === colIdx) {
        diagonals[0].push(bingo);
      }

      if (rowIdx + colIdx === 4) {
        diagonals[1].push(bingo);
      }
    }
    mergedArray.value = [...rows, ...columns, ...diagonals];
  }

  return { bingoCardArray, bingoCardGene, bingoHitCardGene, mergedArray, hitArray };
});
