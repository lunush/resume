<script>
  import { onMount } from 'svelte';

  export let videoCenterX;
  export let videoCenterY;
  export let videoLeft;
  export let videoTop;
  export let isWorkPreviewVisible;
  export let isVideoFloating;
  export let videoElement;
  export let isOnLink;
  export let isAnimated;
  export let currentVideo;
  export let works;

  // Workaround to avoid annoying video animation on page load
  let isVideoHidden = false;

  onMount(() => {
    videoElement = document.getElementById('video');

    if (location.pathname === '/') {
      isVideoHidden = true;

      setTimeout(() => {
        isVideoHidden = false;
      }, 500);
    }
  });

  const followCursorMove = e => {
    if (isVideoFloating) {
      videoCenterX = videoElement.offsetWidth / 2;
      videoCenterY = videoElement.offsetHeight / 2;

      videoLeft = e.clientX - videoCenterX;
      videoTop = e.clientY - videoCenterY;
    }
  };
</script>

<svelte:window on:mousemove="{followCursorMove}" />

<div class="fixed">
  <div
    class="absolute {isVideoFloating
      ? ''
      : isAnimated
      ? 'transition-all duration-1000 ease-in-out'
      : ''}"
    style="transform: translate({videoLeft}px, {videoTop}px);"
  >
    <div
      id="video"
      class="w-72 h-72 xs:w-80 xs:h-80 sm:w-120 sm:h-120 xl:w-150 xl:h-150 border pointer-events-none overflow-hidden {isAnimated
        ? isVideoHidden
          ? ''
          : 'transition-all duration-1000 ease-in-out'
        : ''} {isVideoFloating ? 'rounded-full' : ''}"
      style="transform: scale({isVideoFloating
        ? isWorkPreviewVisible
          ? isOnLink
            ? '.5'
            : '.3'
          : '0'
        : '1'})"
    >
      {#each works as work}
        <video
          class="absolute {work.videoFile == currentVideo
            ? 'z-10'
            : 'z-0'} object-fill w-full h-full"
          src="assets/videos/{work.videoFile}.webm"
          preload="auto"
          loop
          muted
          autoplay="autoplay"></video>
      {/each}
    </div>
  </div>
</div>
