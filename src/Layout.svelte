<script>
  import { fade } from 'svelte/transition';
  import { Link } from 'svelte-routing';
  import Background from './Background.svelte';

  export let setFloatingVideoVisibility;
  let visible = false;

  setTimeout(() => {
    visible = true;
  }, 500);
</script>

{#if visible}
  <div
    transition:fade="{{ duration: 1000 }}"
    class="w-screen h-screen overflow-hidden"
  >
    <Background>
      <div class="absolute z-10 flex content-center justify-between w-full h-8">
        <Link
          to="/portfolio"
          on:click="{() => setFloatingVideoVisibility(true)}"
          class="m-4 text-xl font-light text-gray-900 no-underline hover:no-underline hover:text-gray-500 visited:text-gray-900"
        >Portfolio</Link
        >
        <Link
          to="/about"
          on:click="{() => setFloatingVideoVisibility(true)}"
          class="m-4 text-xl font-light text-gray-900 no-underline hover:no-underline hover:text-gray-500 visited:text-gray-900"
        >About</Link
        >
      </div>
      <slot />
    </Background>
  </div>
{/if}
