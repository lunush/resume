import { quintInOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

const [send, receive] = crossfade({
  duration: d => Math.sqrt(d * 1000),
  fallback() {
    return {
      duration: 300,
      easing: quintInOut,
    };
  },
});

export { send, receive };
