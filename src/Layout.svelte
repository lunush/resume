<script lang="ts">
  import { Router, Link, Route, link } from 'svelte-routing';
  import Background from './Background.svelte';
</script>

<div class="w-screen h-screen overflow-hidden">
  <Background>
  <div class="absolute flex content-center justify-between w-full h-8">
    <Link to="/portfolio" class="m-4 text-xl font-light text-gray-900 no-underline hover:no-underline hover:text-gray-500 visited:text-gray-900">Portfolio</Link>
    <Link to="/about" class="m-4 text-xl font-light text-gray-900 no-underline hover:no-underline hover:text-gray-500 visited:text-gray-900">About</Link>
  </div>
    <slot></slot>
  </Background>
</div>
