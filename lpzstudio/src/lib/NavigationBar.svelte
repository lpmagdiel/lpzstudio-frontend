<script>
    import { Router, Link } from "svelte-routing";
    import logo from "../assets/logo-128.png";
    export let url = "/";
</script>

<Router {url}>
<nav>
    <div class="brand">
        <img src={logo} alt="lpz studio" />
    </div>
    <div class="nav-bar">
        <ul>
            <Link to="/" class="tdn"><li>Home</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/products"><li>Products</li></Link>
        </ul>
    </div>
</nav>
</Router>

<style>
    nav {
        position: fixed;
        color: #ffffff;
        width: 100%;
        height: 80px;
        background-color: #030712;
        display: grid;
        grid-template-columns: 160px 1fr;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    }
    nav .brand {
        background-color: #b22222;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    nav .brand img{
        max-height: 80px;
    }
    nav ul {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 100%;
        gap: 1rem;
        padding: 10px;
    }
    nav ul a{
        height: 100%;
    }
    nav ul li {
        height: 100%;
        display: flex;
        align-items: center;
        color: #ffffff;
        font-weight: bold;
        font-size: 1.1rem;
        position: relative;
        overflow: hidden;
        padding: 5px;
    }
    nav ul li::after{
        content: "";
        position: absolute;
        background-color: #b22222;
        width: 0px;
        height: 4px;
        top: calc(100% - 5px);
        transition: 0.5s;
    }
    nav ul li:hover::after{
        content: "";
        position: absolute;
        background-color: #b22222;
        width: 100%;
        height: 4px;
        transition: 0.5s;
    }
    @media (max-width: 768px) {
        nav{
            height: 60px;
            grid-template-columns: 140px 1fr;
        }
        nav .brand img{
        max-height: 60px;
    }
        nav ul li{
            font-size: 1rem;
        }
    }
</style>
