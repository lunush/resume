<script>
  import { fade } from 'svelte/transition';
  import { Router, Route, Link } from 'svelte-routing';
  import ErrorPage from './ErrorPage.svelte';
  import Portfolio from './Portfolio.svelte';
  import PortfolioWork from './PortfolioWork.svelte';
  import PortfolioWorkVideo from './PortfolioWorkVideo.svelte';

  export let url = '';
  let isWorkPreviewVisible = false;
  let isFloatingVideoVisible = true;
  let visible = false;
  let currentVideo = 'notes';
  let hoveredLink;
  let videoAnchor;

  const setFloatingVideoVisibility = value => (isFloatingVideoVisible = value);

  const setVideoAnchor = value => (videoAnchor = value);

  const setWorkVisibility = value => (isWorkPreviewVisible = value);

  const handleLinkHover = title => (hoveredLink = title);

  const setCurrentVideo = title => (currentVideo = title);

  setTimeout(() => {
    visible = true;
  }, 500);
</script>

<Router url="{url}">
  {#if visible}
    <div
      transition:fade="{{ duration: 1000 }}"
      class="w-screen h-screen overflow-hidden"
    >
      <PortfolioWorkVideo
        videoAnchor="{videoAnchor}"
        isWorkPreviewVisible="{isWorkPreviewVisible}"
        isOnLink="{hoveredLink}"
        isFloatingVideoVisible="{isFloatingVideoVisible}"
      />
      <Route path="/notes"
        ><PortfolioWork
          setVideoAnchor="{setVideoAnchor}"
          setFloatingVideoVisibility="{setFloatingVideoVisibility}"
        />
      </Route>
      <Route path="/posty"
        ><PortfolioWork
          setVideoAnchor="{setVideoAnchor}"
          setFloatingVideoVisibility="{setFloatingVideoVisibility}"
        />
      </Route>
      <Route path="/">
        <Portfolio
          setWorkVisibility="{setWorkVisibility}"
          setFloatingVideoVisibility="{setFloatingVideoVisibility}"
          handleLinkHover="{handleLinkHover}"
          setCurrentVideo="{setCurrentVideo}"
          hoveredLink="{hoveredLink}"
        />
      </Route>
      <Route path="*" component="{ErrorPage}" />
    </div>
  {/if}
</Router>
