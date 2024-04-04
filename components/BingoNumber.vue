<script setup lang="ts">
const bingoButton = useBingoStore();
const bingoHitStore = useBingoHit();
</script>

<template>
  <p class="number">
    {{
      bingoHitStore.bingoHit
        ? "BINGOOOO!!!"
        : bingoButton.stateBingoNumber
          ? bingoButton.stateBingoNumber
          : "BINGO START!"
    }}
  </p>
</template>

<style>
.number {
  font-size: 54px;
  font-weight: bold;
  letter-spacing: 4px;
  margin-bottom: 0.5em;
}
</style>
