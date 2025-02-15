<script>
  import { Router, Route } from "svelte-routing";
  import NavigationBar from "./lib/NavigationBar.svelte";
  import Home from "./pages/Home.svelte";
  import Blog from "./pages/Blog.svelte";
  import Products from "./pages/Products.svelte";
  import logo from "./assets/logo-64.png";
  let url = "/";
</script>

<main>
  <NavigationBar bind:url />
  <Router {url}>
    <div>
      <Route path="/products"><Products /></Route>
      <Route path="/blog"><Blog /></Route>
      <Route path="/"><Home /></Route>
    </div>
  </Router>
  <footer>
    <div class="brand">
      <img src={logo} alt="" />
    </div>
    <div class="footer-social">
        <ul>
        <a href="/">GitHub</a>
        <a href="/">Linkedin</a>
      </ul>
      <p><small>© 2025 MAGMA DEV STUDIO. Todos los derechos reservados.</small></p>
    </div>
  </footer>
</main>

<style>
  footer {
    color: #ffffff;
    width: 100%;
    height: 180px;
    background-color: #030712;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  footer .brand{
    border-right: 4px solid #b22222;
    padding: 5px;
  }
  .footer-social{
    padding: 10px;
  }
  .footer-social a{
    color: #ffffff;
    background-color: #b22222;
    text-decoration: underline;
    padding: 4px;
  }
</style>
