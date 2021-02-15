<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  export let videoCenterX;
  export let videoCenterY;
  export let videoLeft;
  export let videoTop;
  export let isWorkPreviewVisible;
  export let isVideoFloating;
  export let videoElement;
  export let isOnLink;
  export let isAnimated;

  onMount(() => {
    videoElement = document.getElementById('video');
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
      class="w-96 h-96 sm:w-120 sm:h-120 xl:w-150 xl:h-150 border pointer-events-none overflow-hidden {isAnimated
        ? 'transition-all duration-1000 ease-in-out'
        : ''} {isVideoFloating ? 'rounded-full' : ''}"
      style="transform: scale({isVideoFloating
        ? isWorkPreviewVisible
          ? isOnLink
            ? '.5'
            : '.3'
          : '0'
        : '1'})"
    >
      <video
        class="object-fill w-full h-full"
        src="assets/video/notes.mp4"
        preload="auto"
        loop
        autoplay="autoplay"></video>
    </div>
  </div>
</div>
