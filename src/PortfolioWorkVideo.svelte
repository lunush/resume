<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  export let isWorkPreviewVisible;
  export let isFloatingVideoVisible;
  export let videoAnchor;
  export let isOnLink;

  let videoElement;
  let videoCenterX = 0;
  let videoCenterY = 0;
  let videoLeft = 0;
  let videoTop = 0;

  onMount(() => {
    videoElement = document.getElementById('video');

    // transform: translate(-50%, -50%)
    videoCenterX = Math.round(videoElement.offsetWidth / 2);
    videoCenterY = Math.round(videoElement.offsetHeight / 2);
  });

  const setVideoPositionRelativeToVideoAnchorCenter = () => {
    const videoAnchorRect = videoAnchor.getBoundingClientRect();
    const videoAnchorCenterX = videoAnchorRect.left + videoAnchorRect.width / 2;
    const videoAnchorCenterY = videoAnchorRect.top + videoAnchorRect.height / 2;

    videoCenterX = Math.round(videoElement.offsetWidth / 2);
    videoCenterY = Math.round(videoElement.offsetHeight / 2);
    console.log(videoElement.offsetWidth);

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
    setTimeout(() => {
      setVideoPositionRelativeToVideoAnchorCenter();
    }, 1000);
  }

  $: scale = isFloatingVideoVisible
    ? isWorkPreviewVisible
      ? isOnLink
        ? '.5'
        : '.3'
      : '0'
    : '1';

  $: video = isFloatingVideoVisible
    ? ''
    : 'transition-all duration-1000 ease-in-out transform';

  $: isRound = isFloatingVideoVisible ? 'rounded-full' : '';
</script>

<svelte:window
  on:resize="{setVideoPositionRelativeToVideoAnchorCenter}"
  on:mousemove="{followCursorMove}"
/>

<div class="fixed">
  <div
    class="absolute {video}"
    style="transform: translate({videoLeft}px, {videoTop}px);"
  >
    <div
      id="video"
      class="w-96 h-96 xl:w-150 xl:h-150 border border-gray-200 pointer-events-none {isRound} overflow-hidden transition-all duration-1000 ease-in-out"
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
