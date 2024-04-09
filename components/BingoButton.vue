<script setup lang="ts">
const bingoButton = useBingoStore();
const bingoHitStore = useBingoHit();
</script>

<template>
  <button
    class="button"
    :disabled="bingoHitStore.bingoHit"
    v-on:click="
      bingoButton.generateRandomNumber();
      bingoHitStore.bingoJudgeFunc();
    "
  >
    {{ bingoHitStore.bingoHit ? "Bingo!!!!" : "Click me!" }}
  </button>
</template>

<style scoped>
.button {
  background-color: #e76865;
  border: none;
  color: white;
  padding: 16px 48px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 20px auto;
  cursor: pointer;
}
</style>
