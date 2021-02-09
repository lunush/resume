<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  export let isWorkPreviewVisible;
  export let isFloatingVideoVisible;
  export let isOnLink;

  let videoElement;
  let videoAnchor;
  let videoCenterX = 0;
  let videoCenterY = 0;
  let videoLeft = 0;
  let videoTop = 0;

  onMount(() => {
    videoElement = document.getElementById('video');
    videoAnchor = document.getElementById('video-anchor');
    console.log(videoElement, videoAnchor);

    // transform: translate(-50%, -50%)
    videoCenterX = Math.round(videoElement.offsetWidth / 2);
    videoCenterY = Math.round(videoElement.offsetHeight / 2);

    setVideoPositionRelativeToVideoAnchorCenter();
  });

  const setVideoPositionRelativeToVideoAnchorCenter = () => {
    const videoAnchorRect = videoAnchor.getBoundingClientRect();
    const videoAnchorCenterX = videoAnchorRect.left + videoAnchorRect.width / 2;
    const videoAnchorCenterY = videoAnchorRect.top + videoAnchorRect.height / 2;

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
        ? '.7'
        : '.4'
      : '0'
    : '1';

  $: video = isFloatingVideoVisible
    ? ''
    : 'transition-all duration-1000 ease-in-out transform';

  $: isRound = isFloatingVideoVisible ? 'rounded-full' : '';

  $: portfolioWorkContent = isFloatingVideoVisible ? 'hidden' : 'flex';
</script>

<svelte:window
  on:resize="{setVideoPositionRelativeToVideoAnchorCenter}"
  on:mousemove="{followCursorMove}"
/>

<div class="fixed">
  <!-- Floating video -->
  <div
    class="absolute {video}"
    style="transform: translate({videoLeft}px, {videoTop}px);"
  >
    <div
      id="video"
      class="w-120 h-120 border border-black pointer-events-none {isRound} overflow-hidden transition-all duration-1000 ease-in-out"
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

  <!-- Portfolio Work Content -->
  <div
    class="h-screen w-screen justify-center items-center
    {portfolioWorkContent}"
  >
    <div
      class="px-8 py-16 flex flex-col w-full h-full max-w-screen-3xl max-h-screen-3xl"
    >
      <div class="w-full h-full flex flex-row flex-grow">
        <div class="h-full w-full">Work Description</div>
        <div id="video-anchor" class="h-full w-full"></div>
      </div>
      <div class="w-full h-64 flex-none">Used Technologies</div>
    </div>
  </div>
</div>
