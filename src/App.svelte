<script>
  import { fade } from 'svelte/transition';
  import { Router, Route, Link } from 'svelte-routing';
  import ErrorPage from './ErrorPage.svelte';
  import Portfolio from './Portfolio.svelte';
  import PortfolioWork from './PortfolioWork.svelte';
  import PortfolioWorkVideo from './PortfolioWorkVideo.svelte';

  export let url = '';
  let isWorkPreviewVisible = false;
  let isFloatingVideoVisible = false;
  let isAppVisible = false;
  let isPortfolioWorkFadeAnimated = false;
  let currentVideo = 'notes';
  let hoveredLink = '';
  let videoAnchor = null;
  let videoElement = null;
  let videoCenterX = 0;
  let videoCenterY = 0;
  let videoLeft = 0;
  let videoTop = 0;
  let isAnimated = false;
  let isOnLink = false;

  const setVideoPositionRelativeToVideoAnchorCenter = () => {
    const videoAnchorRect = document
      .getElementById('video-anchor')
      .getBoundingClientRect();

    const videoAnchorCenterX =
      Math.round(videoAnchorRect.left) + Math.round(videoAnchorRect.width / 2);
    const videoAnchorCenterY =
      Math.round(videoAnchorRect.top) + Math.round(videoAnchorRect.height / 2);

    videoCenterX = Math.round(document.getElementById('video').offsetWidth / 2);
    videoCenterY = Math.round(
      document.getElementById('video').offsetHeight / 2
    );

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

<Router url="{url}">
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
        bind:videoAnchor
        bind:isAnimated
        bind:isOnLink
        bind:isWorkPreviewVisible
        bind:isFloatingVideoVisible
        setVideoPositionRelativeToVideoAnchorCenter="{setVideoPositionRelativeToVideoAnchorCenter}"
      />
      <Route path="/notes"
        ><PortfolioWork
          bind:isAnimated
          bind:videoAnchor
          bind:isFloatingVideoVisible
          bind:isPortfolioWorkFadeAnimated
          setVideoPositionRelativeToVideoAnchorCenter="{setVideoPositionRelativeToVideoAnchorCenter}"
        />
      </Route>
      <Route path="/posty"
        ><PortfolioWork
          bind:isAnimated
          setVideoPositionRelativeToVideoAnchorCenter="{setVideoPositionRelativeToVideoAnchorCenter}"
          bind:isFloatingVideoVisible
          bind:isPortfolioWorkFadeAnimated
          bind:videoAnchor
        />
      </Route>
      <Route path="/">
        <Portfolio
          bind:isAnimated
          bind:isFloatingVideoVisible
          bind:hoveredLink
          bind:isWorkPreviewVisible
          bind:currentVideo
        />
      </Route>
      <Route path="*" component="{ErrorPage}" />
    </div>
  {/if}
</Router>
