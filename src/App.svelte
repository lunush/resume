<script lang="ts">
  import Background from './Background.svelte';
</script>

<Background>
  <h1>Hi</h1>
</Background>

<style>
  :global(html),
  :global(body) {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

