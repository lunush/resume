<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  export let setVideoPositionRelativeToVideoAnchorCenter;
  export let videoCenterX;
  export let videoCenterY;
  export let videoLeft;
  export let videoTop;
  export let isWorkPreviewVisible;
  export let isFloatingVideoVisible;
  export let videoAnchor;
  export let videoElement;
  export let isOnLink;
  export let isAnimated;

  onMount(() => {
    videoElement = document.getElementById('video');

    // transform: translate(-50%, -50%)
    videoCenterX = Math.round(videoElement.offsetWidth / 2);
    videoCenterY = Math.round(videoElement.offsetHeight / 2);

    setTimeout(() => {
      isAnimated = true;
    }, 100);
  });

  const followCursorMove = e => {
    if (isFloatingVideoVisible) {
      videoLeft = e.clientX - videoCenterX;
      videoTop = e.clientY - videoCenterY;
    }
  };
</script>

<svelte:window
  on:resize="{setVideoPositionRelativeToVideoAnchorCenter}"
  on:mousemove="{followCursorMove}"
/>

<div class="fixed">
  <div
    class="absolute {isFloatingVideoVisible
      ? ''
      : isAnimated
      ? 'transition-all duration-1000 ease-in-out'
      : ''}"
    style="transform: translate({videoLeft}px, {videoTop}px);"
  >
    <div
      id="video"
      class="w-96 h-96 xl:w-150 xl:h-150 border pointer-events-none overflow-hidden {isAnimated
        ? 'transition-all duration-1000 ease-in-out'
        : ''} {isFloatingVideoVisible ? 'rounded-full' : ''}"
      style="transform: scale({isFloatingVideoVisible
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
        autoplay></video>
    </div>
  </div>
</div>
