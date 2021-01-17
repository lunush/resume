<script lang="ts">
  import Section from './Section.svelte';
</script>

<Section>
  <div
    class="flex flex-wrap justify-evenly w-screen h-screen text-center content-center rounded-lg"
  >
    <div>
      <div class="text-gray-900 text-6xl">Notes</div>
    </div>
    <div class="video">
      <video
        class="object-cover"
        src="assets/video/notes.mp4"
        preload="auto"
        loop
        autoplay
      ></video>
    </div>
  </div>
</Section>

<style>
  .video {
    width: 600px;
    height: 600px;
  }
</style>
