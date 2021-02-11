<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Link } from 'svelte-routing';

  export let setFloatingVideoVisibility;
  export let setVideoAnchor;

  onMount(() => {
    setVideoAnchor(document.getElementById('video-anchor'));
    setFloatingVideoVisibility(false);
  });
</script>

<div
  in:fade="{{ delay: 1500, duration: 500 }}"
  out:fade="{{ duration: 500 }}"
  class="flex h-screen w-screen justify-center items-center"
>
  <div class="absolute p-8 left-0 top-0">
    <Link
      to="/"
      class="text-2xl text-gray-900 no-underline hover:no-underline visited:text-gray-900 hover:text-gray-500 transition duration-500 ease-in-out"
      >return</Link
    >
  </div>
  <div
    class="relative flex flex-col w-full h-full max-w-screen-3xl max-h-screen-3xl"
  >
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
