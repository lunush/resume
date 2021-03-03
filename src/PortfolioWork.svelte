<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Link } from 'svelte-routing';

  export let setVideoPositionRelativeToVideoAnchorCenter;
  export let isVideoFloating;
  export let isPortfolioWorkFadeAnimated;
  export let isAnimated;
  export let videoAnchor;
  export let work;

  let fadeDelay = 2000;

  onMount(() => {
    videoAnchor = document.getElementById('video-anchor');

    videoAnchor.parentElement.addEventListener('scroll', () => {
      setVideoPositionRelativeToVideoAnchorCenter();
    });

    isVideoFloating = false;

    setTimeout(
      () => {
        setVideoPositionRelativeToVideoAnchorCenter();
      },
      isAnimated ? 1000 : 0
    );

    isAnimated &&
      setTimeout(() => {
        isAnimated = false;
      }, 2000);
  });

  $: if (!isPortfolioWorkFadeAnimated) fadeDelay = 0;
  $: isAnchorAtTop = window.innerWidth < 768;
</script>

<div
  in:fade="{{ delay: fadeDelay, duration: 500 }}"
  out:fade="{{ duration: 500 }}"
  class="flex h-screen w-screen justify-center items-center"
>
  <div class="absolute p-8 left-0 top-0 z-10">
    <Link
      to="/"
      class="text-2xl text-gray-900 no-underline hover:no-underline visited:text-gray-900 hover:text-gray-500 transition duration-500 ease-in-out"
      >return</Link
    >
  </div>
  <div
    class="relative flex flex-col w-full h-full max-w-screen-3xl max-h-screen-3xl"
  >
    <div
      class="w-full h-full flex flex-col md:flex-row overflow-y-scroll
      md:overflow-hidden"
    >
      {#if isAnchorAtTop}
        <div id="video-anchor" class="h-full w-full mr-16 min-h-2/3"></div>
      {/if}
      <div class="h-full w-full flex flex-col justify-center items-center">
        <h1 class="mb-12 text-5xl text-gray-900 text-center">{work.title}</h1>
        <p class="mb-12 px-8 text-2xl text-gray-900 text-center">
          {work.description}
        </p>
        <div class="w-full flex justify-around items-middle">
          <div class="relative flex items-center">
            <div
              class="hover:scale-125 transform transition-all duration-500 ease-in-out
            p-4 border hover:border-gray-900 rounded-lg"
            >
              <a
                class="text-2xl text-gray-900 no-underline hover:no-underline visited:text-gray-900 transition duration-500 ease-in-out"
                href="{work.demoLink}">Demo</a
              >
            </div>
          </div>
          <div
            class="hover:scale-125 transform transition-all duration-500 ease-in-out
            p-4 border hover:border-gray-900 rounded-lg"
          >
            <a
              class="text-2xl text-gray-900 no-underline hover:no-underline visited:text-gray-900 transition duration-500 ease-in-out"
              href="{work.sourceLink}">Source</a
            >
          </div>
        </div>
      </div>
      {#if !isAnchorAtTop}
        <div id="video-anchor" class="h-full w-full"></div>
      {/if}
    </div>
  </div>
</div>
