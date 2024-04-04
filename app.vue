<template>
  <div class="wrapper">
    <bingoNumber />
    <bingoCard />
    <bingoButton />
  </div>
</template>

<style>
body {
  background-image: linear-gradient(
    45deg,
    #fcfcfc 25%,
    #f6e6e6 25%,
    #f6e6e6 50%,
    #fcfcfc 50%,
    #fcfcfc 75%,
    #f6e6e6 75%
  );
  background-size: 20px 20px;
  width: 100%;
  height: 100%;
  text-align: center;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
