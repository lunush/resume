<script>
  import { Link } from 'svelte-routing';
  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import PortfolioLink from './PortfolioLink.svelte';

  export let hoveredLink;
  export let setWorkVisibility;
  export let setFloatingVideoVisibility;
  export let handleLinkHover;
  export let setCurrentVideo;

  onDestroy(() => {
    setWorkVisibility(false);
    handleLinkHover('');
  });
</script>

<div
  in:fade="{{ delay: 500, duration: 500 }}"
  out:fade="{{ duration: 500 }}"
  class="flex flex-col content-center justify-center w-screen h-screen"
>
  <h1 class="text-3xl text-center text-gray-900">
    Hi there<span class="wave">👋</span>! Please have a look at some of my works
  </h1>
  <div
    on:mouseover="{setWorkVisibility(true)}"
    on:mouseout="{setWorkVisibility(false)}"
    class="flex flex-wrap content-center justify-around w-screen text-center h-80"
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
