<script>
  export let placeholder = "";
  export let type = "text";
  export let bindValue = "";
</script>

<input
  type={type}
  placeholder={placeholder}
  bind:value={bindValue}
  class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
