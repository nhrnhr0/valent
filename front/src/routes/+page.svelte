<script>
import Login from "$lib/Login.svelte";
import Register from "$lib/Register.svelte";
import { goto } from "$app/navigation";

// Redirection to /Admin
function redirectToAdmin() {
  goto("/admin");
}
</script>

<div class="container">
  <div class="row gx-5">
    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>

    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>

    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>

    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>

    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>

    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>

    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>

    <div class="col-lg-3 col-md-4 col-sm-5 my-card">hey</div>
  </div>
</div>
<!-- on:success listens for dispatched 'success' events -->

<!-- <Login on:success={redirectToAdmin} />
  <Register on:success={redirectToAdmin} /> -->
<style lang="scss">
.my-card {
}
</style>
