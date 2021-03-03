<script>
  import { Link } from 'svelte-routing';

  export let currentVideo;
  export let hoveredLink;
  export let work;

  $: isInverted =
    hoveredLink === work.videoFile ? 'text-gray-100' : 'text-gray-900';
</script>

<div
  on:mouseover="{() => (currentVideo = work.videoFile)}"
  class="blend-exclusion flex flex-wrap content-center justify-center w-full h-full z-10"
>
  <div
    on:mouseover="{() => (hoveredLink = work.videoFile)}"
    on:mouseout="{() => (hoveredLink = '')}"
  >
    <Link
      to="/{work.route}"
      class="text-5xl {isInverted} no-underline uppercase link hover:no-underline visited:{isInverted}"
      >{work.title}</Link
    >
  </div>
</div>
