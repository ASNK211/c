<template>
  <div id="app">
    <div class="self-building-square-spinner">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
};
</script>
<style scoped>
#app {
  background-color: #2c263c;
  position: absolute;
  z-index: 1000;
  /* background-color: white; */
  height: 120%;
  width: 100%;
  right: 0px;
  top: 0px;
  /* bottom: 0px; */
  /* padding: 100%; */
  text-align: center;
  line-height: 1000vh;
}

@media (max-width: 760px) {
  #app {
    background-color: #2c263c;
    position: absolute;
    z-index: 1000;
    /* background-color: white; */
    height: 250%;
    width: 100%;
    right: 0px;
    top: 0px;
    /* bottom: 0px; */
    /* padding: 100%; */
    text-align: center;
    line-height: 100vh;
  }
  .self-building-square-spinner,
  .self-building-square-spinner * {
    box-sizing: border-box;
    position: relative;
    margin: auto;
    margin-top: 50%;
  }

  .self-building-square-spinner {
    height: 40px;
    width: 40px;
    top: calc(-10px * 2 / 3);
  }

  .self-building-square-spinner .square {
    height: 10px;
    width: 10px;
    top: calc(-10px * 2 / 3);
    margin-right: calc(10px / 3);
    margin-top: calc(10px / 3);
    background: #ff1d5e;
    float: left;
    position: relative;
    opacity: 0;
    animation: self-building-square-spinner 6s infinite;
  }

  .self-building-square-spinner .square:nth-child(1) {
    animation-delay: calc(300ms * 6);
  }

  .self-building-square-spinner .square:nth-child(2) {
    animation-delay: calc(300ms * 7);
  }

  .self-building-square-spinner .square:nth-child(3) {
    animation-delay: calc(300ms * 8);
  }

  .self-building-square-spinner .square:nth-child(4) {
    animation-delay: calc(300ms * 3);
  }

  .self-building-square-spinner .square:nth-child(5) {
    animation-delay: calc(300ms * 4);
  }

  .self-building-square-spinner .square:nth-child(6) {
    animation-delay: calc(300ms * 5);
  }

  .self-building-square-spinner .square:nth-child(7) {
    animation-delay: calc(300ms * 0);
  }

  .self-building-square-spinner .square:nth-child(8) {
    animation-delay: calc(300ms * 1);
  }

  .self-building-square-spinner .square:nth-child(9) {
    animation-delay: calc(300ms * 2);
  }

  .self-building-square-spinner .clear {
    clear: both;
  }

  @keyframes self-building-square-spinner {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      top: 0;
    }
    50.9% {
      opacity: 1;
      top: 0;
    }
    55.9% {
      opacity: 0;
      top: inherit;
    }
  }
}
.self-building-square-spinner,
.self-building-square-spinner * {
  box-sizing: border-box;
  position: relative;
  margin: auto;
  margin-top: 20%;
}

.self-building-square-spinner {
  height: 40px;
  width: 40px;
  top: calc(-10px * 2 / 3);
}

.self-building-square-spinner .square {
  height: 10px;
  width: 10px;
  top: calc(-10px * 2 / 3);
  margin-right: calc(10px / 3);
  margin-top: calc(10px / 3);
  background: #ff1d5e;
  float: left;
  position: relative;
  opacity: 0;
  animation: self-building-square-spinner 6s infinite;
}

.self-building-square-spinner .square:nth-child(1) {
  animation-delay: calc(300ms * 6);
}

.self-building-square-spinner .square:nth-child(2) {
  animation-delay: calc(300ms * 7);
}

.self-building-square-spinner .square:nth-child(3) {
  animation-delay: calc(300ms * 8);
}

.self-building-square-spinner .square:nth-child(4) {
  animation-delay: calc(300ms * 3);
}

.self-building-square-spinner .square:nth-child(5) {
  animation-delay: calc(300ms * 4);
}

.self-building-square-spinner .square:nth-child(6) {
  animation-delay: calc(300ms * 5);
}

.self-building-square-spinner .square:nth-child(7) {
  animation-delay: calc(300ms * 0);
}

.self-building-square-spinner .square:nth-child(8) {
  animation-delay: calc(300ms * 1);
}

.self-building-square-spinner .square:nth-child(9) {
  animation-delay: calc(300ms * 2);
}

.self-building-square-spinner .clear {
  clear: both;
}

@keyframes self-building-square-spinner {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    top: 0;
  }
  50.9% {
    opacity: 1;
    top: 0;
  }
  55.9% {
    opacity: 0;
    top: inherit;
  }
}
</style>
