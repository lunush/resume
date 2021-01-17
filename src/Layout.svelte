<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Router, Link, Route, link } from 'svelte-routing';
  import Background from './Background.svelte';

  let visible = false;

  setTimeout(() => {
    visible = true;
  }, 0);
</script>

<div class="w-screen h-screen overflow-hidden">
  <Background>
    {#if visible}
      <div
        transition:fly="{{ y: -50, duration: 1500 }}"
        class="w-screen h-screen overflow-hidden"
      >
        <div class="absolute flex content-center justify-between w-full h-8">
          <Link
            to="/portfolio"
            class="m-4 text-xl font-light text-gray-900 no-underline hover:no-underline hover:text-gray-500 visited:text-gray-900"
          >Portfolio</Link
          >
          <Link
            to="/about"
            class="m-4 text-xl font-light text-gray-900 no-underline hover:no-underline hover:text-gray-500 visited:text-gray-900"
          >About</Link
          >
        </div>
        <slot />
      </div>
    {/if}
  </Background>
</div>
