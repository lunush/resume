<script>
  import { fade } from 'svelte/transition';

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
    <slot />
  </div>
{/if}
