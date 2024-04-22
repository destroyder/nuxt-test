<script setup lang="ts">
const bingoHitStore = useBingoHit();
const bingoStore = useBingoStore();
const resetNumberInit = ref(0);
const emit = defineEmits<{ resetNumber: [resetNum: number] }>();
function handleClick() {
  emit("resetNumber", resetNumberInit.value++);
  bingoStore.resetBingoArray();
}
</script>

<template>
  <button class="button" @click="handleClick()">リセットする</button>
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
