export const useBingoReset = defineStore("bingoReset", () => {
  const resetBingoNumber = ref<number>(0);

  function resetNumber() {
    resetBingoNumber.value = resetBingoNumber.value + 1;
  }

  return { resetBingoNumber, resetNumber };
});
