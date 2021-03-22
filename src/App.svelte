<script>
  import { fade } from 'svelte/transition';
  import { Router, Route } from 'svelte-routing';
  import ErrorPage from './ErrorPage.svelte';
  import Portfolio from './Portfolio.svelte';
  import PortfolioWork from './PortfolioWork.svelte';
  import PortfolioWorkVideo from './PortfolioWorkVideo.svelte';
  import works from './works';

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
  let currentVideo = window.location.pathname.substring(1);
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
        bind:currentVideo
        works="{works}"
      />
      {#each works as work}
        <Route path="/{work.route}"
          ><PortfolioWork
            bind:isAnimated
            bind:videoAnchor
            bind:isVideoFloating
            bind:isPortfolioWorkFadeAnimated
            work="{work}"
            setVideoPositionRelativeToVideoAnchorCenter="{setVideoPositionRelativeToVideoAnchorCenter}"
          />
        </Route>
      {/each}
      <Route path="/">
        <Portfolio
          bind:isAnimated
          bind:isVideoFloating
          bind:hoveredLink
          bind:isWorkPreviewVisible
          bind:currentVideo
          works="{works}"
        />
      </Route>
      <Route path="*"><ErrorPage /></Route>
    </div>
  {/if}
</Router>
