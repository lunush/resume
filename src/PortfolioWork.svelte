<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Link } from 'svelte-routing';
  import techIcons from './techIcons.ts';

  export let setVideoPositionRelativeToVideoAnchorCenter;
  export let isVideoFloating;
  export let isPortfolioWorkFadeAnimated;
  export let isAnimated;
  export let videoAnchor;
  export let work;

  let animationDelay = 2000;

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

  $: if (!isPortfolioWorkFadeAnimated) animationDelay = 0;
  $: isAnchorAtTop = window.innerWidth < 768;
</script>

<div
  in:fade="{{ delay: animationDelay, duration: 500 }}"
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
      <div
        class="h-full w-full flex flex-col justify-center items-center mb-16"
      >
        <h1 class="mb-12 text-5xl text-gray-900 text-center">{work.title}</h1>
        <p class="mb-12 px-8 text-2xl text-gray-900 text-center">
          {work.description}
        </p>
        <div class="mb-12 w-full flex justify-around items-middle">
          <div class="relative flex items-center">
            <div
              class="p-4 border rounded-lg {work.demoLink
                ? 'hover:scale-125 transform transition-all duration-500 ease-in-out hover:border-gray-900'
                : ''}"
            >
              <a
                class="text-2xl no-underline hover:no-underline transition duration-500 ease-in-out {work.demoLink
                  ? 'text-gray-900 visited:text-gray-900'
                  : 'text-gray-300 visited:text-gray-300 pointer-events-none'}"
                href="{work.demoLink}"
                target="_blank">Demo</a
              >
            </div>
          </div>
          <div
            class="p-4 border rounded-lg {work.sourceLink
              ? 'hover:scale-125 transform transition-all duration-500 ease-in-out hover:border-gray-900'
              : ''}"
          >
            <a
              class="text-2xl no-underline hover:no-underline transition duration-500 ease-in-out {work.sourceLink
                ? 'text-gray-900 visited:text-gray-900'
                : 'text-gray-300 visited:text-gray-300 pointer-events-none'} "
              href="{work.sourceLink}"
              target="_blank">Source</a
            >
          </div>
        </div>
        <div
          class="h-20 w-full flex justify-around items-center align-middle overflow-hidden"
        >
          {#each work.technologies as tech, i}
            <div
              class="h-20 w-20 duration-1000 ease-in-out"
              title="{techIcons[tech].title}"
              style="transform: translate(0, {isAnimated
                ? '100%'
                : '0'}); transition-delay: {i * 1}00ms"
            >
              <img
                class="object-fill w-full h-full"
                src="assets/icons/{techIcons[tech].fileName}"
                alt="{techIcons[tech].title}"
              />
            </div>
          {/each}
        </div>
      </div>
      {#if !isAnchorAtTop}
        <div id="video-anchor" class="h-full w-full"></div>
      {/if}
    </div>
  </div>
</div>
