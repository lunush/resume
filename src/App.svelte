<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Layout from './Layout.svelte'
  import ErrorPage from './ErrorPage.svelte';
  import Greetings from './Greetings.svelte';
  import About from './About.svelte'
  import Portfolio from './Portfolio.svelte'
  import Notes from './Notes.svelte'

  export let url = '';
</script>

<Router {url}>
<Layout>
    <Route path="/notes" component="{Notes}" />
    <Route path="/portfolio" component="{Portfolio}" />
    <Route path="/about" component="{About}" />
    <Route path="/" component="{Greetings}" />
    <Route path="*" component="{ErrorPage}" />
</Layout>
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
