<script lang="ts">
  import { Link } from 'svelte-routing';
  import Section from './Section.svelte';
  import Cursor from './Cursor.svelte';
  import PortfolioLink from './PortfolioLink.svelte';

  let isWorkPreviewVisible = false;
  let hoveredLink;
  let currentVideo;

  const toggleWorkPreview = () =>
    (isWorkPreviewVisible = !isWorkPreviewVisible);

  const handleLinkHover = title => (hoveredLink = title);

  const setCurrentVideo = title => (currentVideo = title);
</script>

<Section>
  <div class="flex flex-col content-center justify-center w-screen h-screen">
    <Cursor
      isWorkPreviewVisible="{isWorkPreviewVisible}"
      isOnLink="{hoveredLink}"
      currentVideo="{currentVideo}"
    />
    <h1 class="text-3xl font-thin text-center text-gray-900 uppercase">
      Some of my works
    </h1>
    <div
      on:mouseover="{toggleWorkPreview}"
      on:mouseout="{toggleWorkPreview}"
      class="flex flex-wrap content-center justify-around w-screen text-center h-80"
    >
      <PortfolioLink
        title="posty"
        hoveredLink="{hoveredLink}"
        handleLinkHover="{handleLinkHover}"
        setCurrentVideo="{setCurrentVideo}"
      />
      <PortfolioLink
        title="bixov"
        hoveredLink="{hoveredLink}"
        handleLinkHover="{handleLinkHover}"
        setCurrentVideo="{setCurrentVideo}"
      />
      <PortfolioLink
        title="notes"
        hoveredLink="{hoveredLink}"
        handleLinkHover="{handleLinkHover}"
        setCurrentVideo="{setCurrentVideo}"
      />
    </div>
  </div>
</Section>
