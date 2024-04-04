export const useBingoStore = defineStore("bingoButton", () => {
  const stateBingoArray = ref<number[]>([]);
  const stateBingoNumber = ref<number>(0);

  // stateBingoに無い、ビンゴのrandomな番号を生成する
  function generateRandomNumber() {
    // 25までの整数をランダムに生成
    stateBingoNumber.value = Math.floor(Math.random() * 25) + 1;

    // もしstateBingoに既に存在する場合は、再度randomな番号を生成する
    while (stateBingoArray.value.includes(stateBingoNumber.value)) {
      stateBingoNumber.value = Math.floor(Math.random() * 25) + 1;
    }
    stateBingoArray.value.push(stateBingoNumber.value);
  }

  return { stateBingoArray, stateBingoNumber, generateRandomNumber };
});
