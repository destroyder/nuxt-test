<script setup lang="ts">
// store
const bingoCardArrayStore = useBingoCard();
bingoCardArrayStore.bingoCardGene();
const bingoCardArray = bingoCardArrayStore.bingoCardArray;
const bingoButton = useBingoStore();
</script>

<template>
  <table class="bingoCard">
    <tbody>
      <tr v-for="(row, rowIndex) in 5" :key="row">
        <td
          v-for="(bingo, index) in bingoCardArray.slice(rowIndex * 5, (rowIndex + 1) * 5)"
          :class="{ isHit: bingoButton.stateBingoArray.includes(bingo) }"
          :key="index"
        >
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
  font-weight: bold;
  margin-bottom: 20px;
}
.bingoCard td {
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.bingoCard td.isHit {
  background-color: #ffcc00;
}
</style>
