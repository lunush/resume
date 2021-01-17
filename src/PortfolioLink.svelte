<script>
  import { Link } from 'svelte-routing';
  export let setCurrentVideo;
  export let handleLinkHover;
  export let hoveredLink;
  export let title;

  $: isInverted = hoveredLink === title ? 'text-gray-100' : 'text-gray-900';
</script>

<div
  on:mouseover="{() => setCurrentVideo(title)}"
  class="flex flex-wrap content-center justify-center w-1/3 h-full"
>
  <div
    on:mouseover="{() => handleLinkHover(title)}"
    on:mouseout="{() => handleLinkHover()}"
  >
    <Link
      to="/{title}"
      class="text-5xl font-thin {isInverted} no-underline uppercase link hover:no-underline visited:{isInverted}"
    >{title}</Link
    >
  </div>
</div>
