// Bingoがあたりかどうかを判定する関数を提供する
export const useBingoHit = defineStore("bingoHit", () => {
  const bingoButton = useBingoStore();
  const bingoCardArrayStore = useBingoCard();
  const bingoHit: Ref<boolean> = ref(false);

  const bingoJudgeFunc = () => {
    bingoHit.value = bingoCardArrayStore.hitArray.some((subarray) => {
      return subarray.every((num) => bingoButton.stateBingoArray.includes(num));
    });
    return bingoHit.value;
  };

  return { bingoJudgeFunc, bingoHit };
});
