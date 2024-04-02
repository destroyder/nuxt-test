<script setup lang="ts">
const bingoButton = useBingoStore();
</script>

<template>
  <p>{{ bingoButton.stateBingoNumber ? bingoButton.stateBingoNumber : "BINGO" }}</p>
</template>
