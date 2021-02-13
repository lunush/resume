<script>
  import { Link } from 'svelte-routing';

  export let currentVideo;
  export let hoveredLink;
  export let title;

  $: isInverted = hoveredLink === title ? 'text-gray-100' : 'text-gray-900';
</script>

<div
  on:mouseover="{() => (currentVideo = title)}"
  class="blend-exclusion flex flex-wrap content-center justify-center w-full h-full z-10"
>
  <div
    on:mouseover="{() => (hoveredLink = title)}"
    on:mouseout="{() => (hoveredLink = '')}"
  >
    <Link
      to="/{title}"
      class="text-5xl {isInverted} no-underline uppercase link hover:no-underline visited:{isInverted}"
      >{title}</Link
    >
  </div>
</div>
