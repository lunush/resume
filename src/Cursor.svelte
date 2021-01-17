<script lang="ts">
  import Section from './Section.svelte';

  export let isWorkPreviewVisible;
  export let isOnLink;
  export let currentVideo;

  let left = -500;
  let top = -500;

  const followCursorMove = e => {
    left = e.clientX;
    top = e.clientY;
  };

  $: scale = isWorkPreviewVisible ? (isOnLink ? '' : 'scale-75') : 'scale-0';
</script>

<svelte:window on:mousemove="{followCursorMove}" />

<div
  class="blend fixed flex flex-row pointer-events-none w-80 h-80 rounded-full overflow-hidden transition duration-500 ease-in-out transform {scale} -translate-x-1/2 -translate-y-1/2"
  style="left: {left}px; top: {top}px;"
>
  <video
    class="absolute transform scale-125 translate-y-4"
    src="assets/video/{currentVideo}.mp4"
    preload="auto"
    loop
    autoplay
  ></video>
</div>

<style>
  .blend {
    mix-blend-mode: exclusion;
  }
</style>
