<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  export let isWorkPreviewVisible;
  export let isFloatingVideoVisible;
  export let videoAnchor;
  export let isOnLink;

  let videoElement;
  let isAnimated = false;
  let videoCenterX = 0;
  let videoCenterY = 0;
  let videoLeft = 0;
  let videoTop = 0;

  onMount(() => {
    videoElement = document.getElementById('video');

    // transform: translate(-50%, -50%)
    videoCenterX = Math.round(videoElement.offsetWidth / 2);
    videoCenterY = Math.round(videoElement.offsetHeight / 2);

    setTimeout(() => {
      isAnimated = true;
    }, 200);
  });

  const setVideoPositionRelativeToVideoAnchorCenter = () => {
    const videoAnchorRect = videoAnchor.getBoundingClientRect();
    const videoAnchorCenterX = videoAnchorRect.left + videoAnchorRect.width / 2;
    const videoAnchorCenterY = videoAnchorRect.top + videoAnchorRect.height / 2;

    videoCenterX = Math.round(videoElement.offsetWidth / 2);
    videoCenterY = Math.round(videoElement.offsetHeight / 2);

    videoLeft = videoAnchorCenterX - videoCenterX;
    videoTop = videoAnchorCenterY - videoCenterY;
  };

  const followCursorMove = e => {
    if (isFloatingVideoVisible) {
      videoLeft = e.clientX - videoCenterX;
      videoTop = e.clientY - videoCenterY;
    }
  };

  $: if (!isFloatingVideoVisible) {
    setTimeout(
      () => {
        setVideoPositionRelativeToVideoAnchorCenter();
      },
      isAnimated ? 1000 : 0
    );
  }

  $: scale = isFloatingVideoVisible
    ? isWorkPreviewVisible
      ? isOnLink
        ? '.5'
        : '.3'
      : '0'
    : '1';

  $: isAnimatedMovement = isFloatingVideoVisible
    ? ''
    : isAnimated
    ? 'transition-all duration-1000 ease-in-out'
    : '';

  $: isAnimatedScaling = isAnimated
    ? 'transition-all duration-1000 ease-in-out'
    : '';

  $: isRound = isFloatingVideoVisible ? 'rounded-full' : '';
</script>

<svelte:window
  on:resize="{setVideoPositionRelativeToVideoAnchorCenter}"
  on:mousemove="{followCursorMove}"
/>

<div class="fixed">
  <div
    class="absolute {isAnimatedMovement}"
    style="transform: translate({videoLeft}px, {videoTop}px);"
  >
    <div
      id="video"
      class="w-96 h-96 xl:w-150 xl:h-150 border pointer-events-none overflow-hidden {isAnimatedScaling} {isRound}"
      style="transform: scale({scale})"
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
