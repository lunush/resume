<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Layout from './Layout.svelte';
  import ErrorPage from './ErrorPage.svelte';
  import Greetings from './Greetings.svelte';
  import About from './About.svelte';
  import Portfolio from './Portfolio.svelte';
  import PortfolioWork from './PortfolioWork.svelte';
  import PortfolioWorkVideo from './PortfolioWorkVideo.svelte';

  export let url = '';
  let isWorkPreviewVisible = false;
  let hoveredLink;
  let currentVideo = 'notes';
  let isFloatingVideoVisible = true;

  const setFloatingVideoVisibility = value => (isFloatingVideoVisible = value);

  const setWorkVisibility = value => (isWorkPreviewVisible = value);

  const handleLinkHover = title => (hoveredLink = title);

  const setCurrentVideo = title => (currentVideo = title);
</script>

<Router url="{url}">
  <Layout setFloatingVideoVisibility="{setFloatingVideoVisibility}">
    <PortfolioWorkVideo
      isWorkPreviewVisible="{isWorkPreviewVisible}"
      isOnLink="{hoveredLink}"
      isFloatingVideoVisible="{isFloatingVideoVisible}"
    />
    <Route path="/portfolio">
      <Portfolio
        setWorkVisibility="{setWorkVisibility}"
        setFloatingVideoVisibility="{setFloatingVideoVisibility}"
        handleLinkHover="{handleLinkHover}"
        setCurrentVideo="{setCurrentVideo}"
        hoveredLink="{hoveredLink}"
      />
    </Route>
    <Route path="/notes"
      ><PortfolioWork
        setFloatingVideoVisibility="{setFloatingVideoVisibility}"
      />
    </Route>
    <Route path="/posty"
      ><PortfolioWork
        setFloatingVideoVisibility="{setFloatingVideoVisibility}"
      />
    </Route>
    <Route path="/about" component="{About}" />
    <Route path="/" component="{Greetings}" />
    <Route path="*" component="{ErrorPage}" />
  </Layout>
</Router>
