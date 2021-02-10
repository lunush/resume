<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  export let setFloatingVideoVisibility;
  export let setVideoAnchor;

  onMount(() => {
    setVideoAnchor(document.getElementById('video-anchor'));
    setFloatingVideoVisibility(false);
  });
</script>

<div class="w-screen h-screen">
  <div class="h-screen w-screen justify-center items-center">
    <div
      class="px-8 py-16 flex flex-col w-full h-full max-w-screen-3xl max-h-screen-3xl"
    >
      <div class="w-full h-full flex flex-row flex-grow">
        <div class="h-full w-full">Work Description</div>
        <div id="video-anchor" class="h-full w-full"></div>
      </div>
      <div class="w-full h-64 flex-none">Used Technologies</div>
    </div>
  </div>
</div>
