<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"
  ></script>
</svelte:head>
<main>
  <slot>
    <!-- +page.svelte is rendered here -->
  </slot>
</main>

<style lang="scss">
:root {
  --primary: #673ab7;
  --secondary: #4caf50;
  --surface: #fff;
  --background: #f5f5f5;
  --error: #b00020;
}
:global(.btn-primary) {
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>
