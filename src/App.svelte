<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Layout from './Layout.svelte';
  import ErrorPage from './ErrorPage.svelte';
  import Portfolio from './Portfolio.svelte';
  import PortfolioWork from './PortfolioWork.svelte';
  import PortfolioWorkVideo from './PortfolioWorkVideo.svelte';

  export let url = '';
  let isWorkPreviewVisible = false;
  let isFloatingVideoVisible = true;
  let currentVideo = 'notes';
  let hoveredLink;
  let videoAnchor;

  const setFloatingVideoVisibility = value => (isFloatingVideoVisible = value);

  const setVideoAnchor = value => (videoAnchor = value);

  const setWorkVisibility = value => (isWorkPreviewVisible = value);

  const handleLinkHover = title => (hoveredLink = title);

  const setCurrentVideo = title => (currentVideo = title);
</script>

<Router url="{url}">
  <Layout setFloatingVideoVisibility="{setFloatingVideoVisibility}">
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
  </Layout>
</Router>
