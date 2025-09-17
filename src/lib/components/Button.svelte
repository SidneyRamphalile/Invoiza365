<script>
  export let text = "";
  export let onClick = () => {};
  export let type = "primary"; // "primary" or "secondary"
</script>

<button
  class={`w-full p-2 rounded text-white ${
    type === "primary"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-gray-600 hover:bg-gray-700"
  } transition`}
  on:click={onClick}
>
  {text}
</button>
