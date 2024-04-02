<script setup lang="ts">
// store
const bingoButton = useBingoStore();

const bingoCardArray = ref([]);
async function bingoCardGene() {
  bingoCardArray.value = Array.from({ length: 25 }, (_, index) => index + 1);
  // bingoCardをランダムに並び替える
  bingoCardArray.value.sort(() => Math.random() - 0.5);
}
onMounted(async () => {
  await bingoCardGene();
});

const isHit = ref(false);
</script>

<template>
  <table class="bingoCard">
    <tbody>
      <tr v-for="(row, rowIndex) in 5" :key="rowIndex">
        <td v-for="(bingo, index) in bingoCardArray.slice(rowIndex * 5, (rowIndex + 1) * 5)" :key="index">
          {{ bingo }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.bingoCard {
  border-collapse: collapse;
  text-align: center;
}
.bingoCard td {
  padding: 20px;
  border: 1px solid #333;
}
</style>
