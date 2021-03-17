<script>
  import { onDestroy, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import PortfolioLink from './PortfolioLink.svelte';

  export let hoveredLink;
  export let currentVideo;
  export let isAnimated;
  export let isVideoFloating;
  export let isWorkPreviewVisible;
  export let works;

  onMount(() => {
    isVideoFloating = true;
    isAnimated = true;
  });

  onDestroy(() => {
    isWorkPreviewVisible = false;
    hoveredLink = '';
  });
</script>

<div
  in:fade="{{ delay: 500, duration: 500 }}"
  out:fade="{{ duration: 500 }}"
  class="flex items-center justify-center w-screen h-screen"
>
  <div
    class="h-full w-full flex flex-col items-center justify-center max-w-screen-3xl max-h-screen-3xl"
  >
    <div>
      <h1 class="text-2xl sm:text-4xl mb-4 text-center text-gray-900 z-10">
        Hi there<span class="wave">👋</span>! I am a web developer
      </h1>
      <p
        class="text-xl sm:text-2xl blend-exclusion text-center text-gray-900 z-10"
      >
        Here are some of my works I'd like to share with you
      </p>
    </div>
    <div
      on:mouseover="{() => (isWorkPreviewVisible = true)}"
      on:mouseout="{() => (isWorkPreviewVisible = false)}"
      class="flex items-center justify-around text-center w-full h-1/2"
    >
      {#each works as work}
        <PortfolioLink bind:hoveredLink bind:currentVideo work="{work}" />
      {/each}
    </div>
  </div>
  <a
    class="absolute right-4 bottom-4"
    href="https://github.com/lunush/svelte-minimal-portfolio"
    ><img class="w-8 h-8" src="assets/icons/github.svg" alt="Github Icon" /></a
  >
</div>

<style>
  .wave {
    animation: wave-animation 2.5s infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
