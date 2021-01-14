<script lang="ts">
const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const generateStarsPosition = (number) => {
  let result = ''

  for(let i = 0; i < number; i++) {
    result += ` #222 ${getRandomNumber(0, 3000)}px ${getRandomNumber(0, 3000)}px,`
  }

  return result.substring(0, result.length - 1)
}

const [stars1, stars2, stars3] = [generateStarsPosition(700),
  generateStarsPosition(400), generateStarsPosition(100)]
</script>

<main>
  <div class="background">
    <div id="stars1" style="box-shadow: {stars1}"/>
    <div id="stars2" style="box-shadow: {stars2}"/>
    <div id="stars3" style="box-shadow: {stars3}"/>
  </div>
  <slot></slot>
</main>

<style>
  main {
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
  }

  .background {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    z-index: -1;
    transform: translateZ(-15) scale(15);
    background: radial-gradient(ellipse at bottom, #eee 0%, #fff 100%)
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  #stars1 {
    width: 1px;
    height: 1px;
    overflow: hidden;
    background: transparent;
    animation: animStar 800s linear infinite;
  }

  #stars2 {
    width: 2px;
    height: 2px;
    overflow: hidden;
    background: transparent;
    animation: animStar 500s linear infinite;
  }

  #stars3 {
    width: 3px;
    height: 3px;
    overflow: hidden;
    background: transparent;
    animation: animStar 200s linear infinite;
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
</style>
