<script>
    import { Link } from "svelte-routing";
    export let title = "";
    export let description = "";
    export let url = "";
</script>

<div class="infobox">
    <div>
        <p><b>{title}</b></p>
        <p>{description}</p>
    </div>
    <div class="info-btn">
        <Link to={url}><button>VER <svg width="18" height="18" fill="#ffffff"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></button></Link>
    </div>
</div>

<style>
    .infobox {
        padding: 1.5rem;
        height: fit-content;
        border: 2px solid #2b2b2b;
        display: grid;
        gap: 0.5rem;
        flex-wrap: wrap;
        text-overflow: ellipsis;
        border-radius: 4px;
    }
    .infobox .info-btn{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .infobox b {
        color: #ffffff;
    }
    .infobox p{
        color: #747474;
    }
    .infobox button {
        padding: 0.5rem 1rem;
        background-color: #b22222;
        color: #ffffff;
        border: none;
        cursor: pointer;
        font-size: 1rem;
    }

    .infobox button:hover {
        background-color: #f0f0f0;
        color: #b22222;
    }
</style>
