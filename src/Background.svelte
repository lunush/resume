<script>
  const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const generateStarsPosition = number => {
    let result = '';

    for (let i = 0; i < number; i++) {
      result += ` #222 ${getRandomNumber(0, 2000)}px ${getRandomNumber(
        0,
        2000
      )}px,`;
    }

    return result.substring(0, result.length - 1);
  };

  const [stars1, stars2, stars3] = [
    generateStarsPosition(400),
    generateStarsPosition(200),
    generateStarsPosition(50),
  ];
</script>

<main>
  <!--
  <div class="background">
    <div id="stars1" style="box-shadow: {stars1}"></div>
    <div id="stars2" style="box-shadow: {stars2}"></div>
    <div id="stars3" style="box-shadow: {stars3}"></div>
  </div>
  -->
  <slot />
</main>

<style>
  main {
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
    perspective: 1px;
  }

  .background {
    overflow: hidden;
    height: 200vh;
    width: 200vw;
    position: absolute;
    z-index: -1;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform: translateZ(100px) scale(5);
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
