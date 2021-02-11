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

<div class="flex h-screen w-screen justify-center items-center">
  <div class="flex flex-col w-full h-full max-w-screen-3xl max-h-screen-3xl">
    <div class="w-full h-full flex">
      <div class="h-full w-full flex flex-col justify-center items-center">
        <h1 class="mb-8 text-5xl text-gray-900 text-center">Notes</h1>
        <p class="px-8 text-2xl text-gray-900 text-center">
          A very simple note-taking app. It is a progressive web app (PWA) with
          persistent storage, so it can be used without internet connection.
        </p>
      </div>
      <div id="video-anchor" class="h-full w-full mr-16"></div>
    </div>
  </div>
</div>
