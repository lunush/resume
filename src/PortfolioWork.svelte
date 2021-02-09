<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  export let setFloatingVideoVisibility;

  onMount(() => {
    setFloatingVideoVisibility(false);
  });
</script>

<div class="w-screen h-screen"></div>
