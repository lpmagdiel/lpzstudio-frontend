<script>
    export let text = "";
    export let background = "transparent";
    export let color = "#ffffff";
</script>

<div class="slider-title" style={`background-color:${background}`}>
    <h2 style={`color:${color}`}>{text}</h2>
</div>

<style>
    .slider-title {
        position: relative;
        width: 100%;
        min-height: 100px;
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }
    h2 {
        color: #ffffff;
        font-size: 2rem;
    }
    @keyframes upText{
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(0px);
        }
    }
    @keyframes scroll-text {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>
