<script>
  import { fade } from 'svelte/transition';
  import { Router, Route } from 'svelte-routing';
  import ErrorPage from './ErrorPage.svelte';
  import Portfolio from './Portfolio.svelte';
  import PortfolioWork from './PortfolioWork.svelte';
  import PortfolioWorkVideo from './PortfolioWorkVideo.svelte';

  let isAppVisible = false;
  let videoAnchor = null;
  let videoElement = null;
  let videoCenterX = 0;
  let videoCenterY = 0;
  let videoLeft = 0;
  let videoTop = 0;
  let isWorkPreviewVisible = false;
  let isVideoFloating = false;
  let isPortfolioWorkFadeAnimated = false;
  let currentVideo = 'notes';
  let hoveredLink = '';
  let isAnimated = false;
  let isOnLink = false;

  const setVideoPositionRelativeToVideoAnchorCenter = () => {
    const videoAnchorRect = videoAnchor.getBoundingClientRect();

    const videoAnchorCenterX = videoAnchorRect.left + videoAnchorRect.width / 2;
    const videoAnchorCenterY = videoAnchorRect.top + videoAnchorRect.height / 2;

    videoCenterX = videoElement.offsetWidth / 2;
    videoCenterY = videoElement.offsetHeight / 2;

    videoLeft = videoAnchorCenterX - videoCenterX;
    videoTop = videoAnchorCenterY - videoCenterY;
  };

  setTimeout(() => {
    isAppVisible = true;
  }, 500);

  setTimeout(() => {
    isPortfolioWorkFadeAnimated = true;
  }, 1000);

  $: isOnLink = hoveredLink !== '';
</script>

<svelte:window on:resize="{setVideoPositionRelativeToVideoAnchorCenter}" />

<Router>
  {#if isAppVisible}
    <div
      transition:fade="{{ duration: 1000 }}"
      class="w-screen h-screen overflow-hidden"
    >
      <PortfolioWorkVideo
        bind:videoCenterX
        bind:videoCenterY
        bind:videoLeft
        bind:videoTop
        bind:videoElement
        bind:isAnimated
        bind:isOnLink
        bind:isWorkPreviewVisible
        bind:isVideoFloating
      />
      <Route path="/notes"
        ><PortfolioWork
          bind:isAnimated
          bind:videoAnchor
          bind:isVideoFloating
          bind:isPortfolioWorkFadeAnimated
          setVideoPositionRelativeToVideoAnchorCenter="{setVideoPositionRelativeToVideoAnchorCenter}"
        />
      </Route>
      <Route path="/posty"
        ><PortfolioWork
          bind:isAnimated
          setVideoPositionRelativeToVideoAnchorCenter="{setVideoPositionRelativeToVideoAnchorCenter}"
          bind:isVideoFloating
          bind:isPortfolioWorkFadeAnimated
          bind:videoAnchor
        />
      </Route>
      <Route path="/">
        <Portfolio
          bind:isAnimated
          bind:isVideoFloating
          bind:hoveredLink
          bind:isWorkPreviewVisible
          bind:currentVideo
        />
      </Route>
      <Route path="*" component="{ErrorPage}" />
    </div>
  {/if}
</Router>
