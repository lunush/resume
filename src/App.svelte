<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import Background from './Background.svelte';
  import Greetings from './Greetings.svelte';
  import ErrorPage from './ErrorPage.svelte';

  export let url = '';
</script>

<Router {url}>
  <Background>
    <Route path="/" component="{Greetings}" />
    <Route path="*" component="{ErrorPage}" />
  </Background>
</Router>

<style>
  :global(html),
  :global(body) {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
  }
</style>
