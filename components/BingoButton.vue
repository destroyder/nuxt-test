<script setup lang="ts">
const bingoButton = useBingoStore();
</script>

<template>
  <button class="button" v-on:click="bingoButton.generateRandomNumber">Click me!</button>
</template>

<style scoped>
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
