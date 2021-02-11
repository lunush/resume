<script>
  import { Link } from 'svelte-routing';
  import { onDestroy, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import PortfolioLink from './PortfolioLink.svelte';

  export let hoveredLink;
  export let setWorkVisibility;
  export let setFloatingVideoVisibility;
  export let handleLinkHover;
  export let setCurrentVideo;

  onMount(() => {
    setFloatingVideoVisibility(true);
  });

  onDestroy(() => {
    setWorkVisibility(false);
    handleLinkHover('');
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
      <h1 class="blend text-4xl text-center text-gray-900 z-10">
        Hi there<span class="wave">👋</span>! I am a web developer
      </h1>
      <p class="blend text-2xl text-center text-gray-900 z-10">
        Please have a look at some of my works
      </p>
    </div>
    <div
      on:mouseover="{setWorkVisibility(true)}"
      on:mouseout="{setWorkVisibility(false)}"
      class="flex items-center justify-around text-center w-full h-1/2"
    >
      <PortfolioLink
        title="posty"
        hoveredLink="{hoveredLink}"
        handleLinkHover="{handleLinkHover}"
        setCurrentVideo="{setCurrentVideo}"
        setFloatingVideoVisibility="{setFloatingVideoVisibility}"
      />
      <PortfolioLink
        title="notes"
        hoveredLink="{hoveredLink}"
        handleLinkHover="{handleLinkHover}"
        setCurrentVideo="{setCurrentVideo}"
        setFloatingVideoVisibility="{setFloatingVideoVisibility}"
      />
    </div>
  </div>
</div>

<style>
  .blend {
    mix-blend-mode: exclusion;
  }

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
