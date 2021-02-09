<script>
  import { fade } from 'svelte/transition';
</script>

<div
  in:fade="{{ delay: 500, duration: 500 }}"
  out:fade="{{ duration: 500 }}"
  class="flex flex-col flex-wrap content-center justify-center w-screen h-screen text-center"
>
  <h1 class="text-6xl font-thin text-gray-900 uppercase">About</h1>
</div>
