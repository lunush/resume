<script lang="ts">
  import Section from './Section.svelte';
</script>

<Section>
  <div
    class="flex flex-col flex-wrap justify-center w-screen h-screen text-center align-middle rounded-lg"
  >
    <div class="absolute w-2/5 h-2/5 right-20 top-40">
      <video
        id="posty"
        class="object-cover"
        src="assets/video/notes.mp4"
        preload="auto"
        loop
        autoplay
      ></video>
    </div>
  </div>
</Section>
