<script>
    import ContactForm from "../lib/ContactForm.svelte";
    import InfoBox from "../lib/InfoBox.svelte";

    import SliderTitle from "../lib/SliderTitle.svelte";
</script>

<header>
    <div class="header-content">
        <h1>Estas en <span class="tag">LPZ STUDIO</span></h1>
        <p>Desarrollamos de software y creamos de soluciones digitales.</p>
    </div>
</header>
<div class="pd1 iflex">
    <svg fill="#f0f0f0" height="28" width="28" viewBox="0 0 32 32"
        ><path
            d="M13.3 2H6.7A2.7 2.7 0 0 0 4 4.7V8a1 1 0 0 0 2 0V4.7a.7.7 0 0 1 .7-.7h6.6a.7.7 0 0 1 .7.7V7h-3a1 1 0 0 0 0 2h3v2h-3a1 1 0 0 0 0 2h3v2h-3a1 1 0 0 0 0 2h3v2h-3a1 1 0 0 0 0 2h3v2h-3a1 1 0 0 0 0 2h3v2.3a.7.7 0 0 1-.7.7H6.7a.7.7 0 0 1-.7-.7V12a1 1 0 0 0-2 0v15.3A2.7 2.7 0 0 0 6.7 30h6.6a2.7 2.7 0 0 0 2.7-2.7V4.7A2.7 2.7 0 0 0 13.3 2zM27 16a1 1 0 0 0 1-1V7a5 5 0 0 0-10 0v15.13a3.83 3.83 0 0 0 .65 2.15l3.52 5.27a1 1 0 0 0 1.66 0l3.52-5.27a3.83 3.83 0 0 0 .65-2.15V19a1 1 0 0 0-2 0v3.13a1.92 1.92 0 0 1-.31 1L23 27.2l-2.69-4a1.92 1.92 0 0 1-.31-1V7a3 3 0 0 1 6 0v8a1 1 0 0 0 1 1z"
        /></svg
    >
    <h2>Herramientas para desarrolladores</h2>
</div>
<div class="grid pd1">
    <InfoBox
        url=""
        title="MAGMA2D"
        description="Mini librería para juegos en html5 canvas"
    />
    <InfoBox
        url=""
        title="DUMMIESGO"
        description="Crea imágenes para tus pruebas"
    />
    <InfoBox
        url=""
        title="LOCAL2JSON"
        description="Almacenar datos en tu web de forma local y fácil con localstorage"
    />
    <InfoBox
        url=""
        title="JSONVIEWER"
        description="Visualiza de forma grafica tus archivos json"
    />
</div>
<div class="pd1 iflex">
    <svg fill="#f0f0f0" height="28" width="28" viewBox="0 0 32 32"
        ><path
            d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zM8.7 3.42a63.65 63.65 0 0 1 14.6 0 6 6 0 0 1 5.28 5.28c.2 1.76.31 3.53.36 5.3H27V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H3.22c.06-.77.11-1.54.2-2.3A6 6 0 0 1 8.7 3.42zM14.54 14l-1.71-2.55A1 1 0 0 0 12 11H7V9h18v5zm14 9.3a6 6 0 0 1-5.28 5.28 63.65 63.65 0 0 1-14.6 0 6 6 0 0 1-5.24-5.28A63.24 63.24 0 0 1 3.09 13h8.37l1.71 2.55A1 1 0 0 0 14 16h15a63.55 63.55 0 0 1-.42 7.3z"
            data-name="file manager android app aplication phone"
        /></svg
    >
    <h2>Proyectos</h2>
</div>
<div class="grid pd1">
    <InfoBox
        url=""
        title="TimersUp"
        description="App para controlar las horas de trabajo."
    />
    <InfoBox
        url=""
        title="Limbentary"
        description="Aplicación para el control de inventario."
    />
    <InfoBox
        url=""
        title="Stockero"
        description="Crea contratos de modelo y propiedad para usar en bancos de imágenes."
    />
    <InfoBox
        url=""
        title="Picoteo"
        description="Gestion de comandas para pequeños restaurantes y cafes."
    />
</div>
<div class="pd1 iflex">
    <svg fill="#f0f0f0" height="28" width="28" viewBox="0 0 24 24"
        ><g data-name="26.Information"
            ><path
                d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"
            /><path d="M15 19h-4v-8H9V9h4v8h2v2zM11 5h2v2h-2z" /></g
        ></svg
    >
    <h2>Acerca de..</h2>
</div>
<div class="pd1">
    <p>
        🔥 En el corazón de la innovación tecnológica, Magma Dev Studio emerge
        como un volcán de creatividad y soluciones digitales. Somos más que un
        estudio de desarrollo - somos arquitectos de experiencias digitales
        transformadoras.
    </p>
    <div class="philosophy-box pop-in">
        <h3>Nuestra Filosofía</h3>
        <p>
            Creemos que el código bien elaborado es arte funcional. Combinamos:
        </p>
        <ul class="philosophy-list">
            <li>💡 Innovación disruptiva</li>
            <li>🔐 Seguridad robusta</li>
            <li>🎯 Eficiencia operativa</li>
            <li>🧩 Soluciones escalables</li>
        </ul>
    </div>
    <div class="space"></div>
    <div class="center">
        <p>
            <i
                >"Detrás de cada línea de código hay una historia de pasión,
                horas de depuración y ese momento eureka que hace que todo valga
                la pena."
            </i>
        </p>
    </div>
    <div class="space"></div>
    <div class="pd1 grid">
        <span class="tech-item">
            <img src="/reactjs-ar21.svg" alt="">
        </span>
        <span class="tech-item">
            <img src="/nodejs-ar21.svg" alt="">
        </span>
        <span class="tech-item">
            <img src="/git-scm-ar21.svg" alt="">
        </span>
        <span class="tech-item">
            <img src="/sveltetechnology-ar21.svg" alt="">
        </span>
        <span class="tech-item">
            <img src="/wordpress-ar21.svg" alt="">
        </span>
        <span class="tech-item">
            <img src="/electronjs-ar21.svg" alt="">
        </span>
    </div>
</div>
<div class="space"></div>
<div class="pd1 iflex">
    <svg
        fill="#f0f0f0"
        height="32"
        width="32"
        viewBox="0 0 32 32"
        style="enable-background:new 0 0 32 32"
        xml:space="preserve"
        ><path
            d="M30.625 12.914H20.254a1 1 0 1 1 0-2h10.371a1 1 0 1 1 0 2zM30.625 20.293h-6.844a1 1 0 1 1 0-2h6.844a1 1 0 1 1 0 2zM30.625 27.672h-4.336a1 1 0 1 1 0-2h4.336a1 1 0 1 1 0 2z"
        /><g
            ><path
                d="M12.375 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM20.317 32H4.433a4.062 4.062 0 0 1-4.058-4.058c0-6.616 5.383-12 12-12s12 5.384 12 12A4.062 4.062 0 0 1 20.317 32zm-7.942-14.058c-5.514 0-10 4.486-10 10A2.06 2.06 0 0 0 4.433 30h15.884a2.06 2.06 0 0 0 2.058-2.058c0-5.514-4.486-10-10-10z"
            /></g
        ></svg>
    <h2>Contacto</h2>
</div>
<div class="space"></div>
<div class="center">
    <ContactForm/>
</div>
<div class="space"></div>

<style>
    header {
        width: 100%;
        height: 90vh;
        background-image: url("./bg.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    p {
        color: #747474;
    }
    .header-content {
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
        text-align: center;
    }
    @media (max-width: 768px) {
        header{
            height: 50vh;
        }
        .header-content h1 {
            font-size: 1.2rem;
        }
    }
    .tech-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
        transition: transform 0.3s ease;
        color: #747474;
    }

    .tech-item:hover {
        transform: translateY(-3px);
    }
    .philosophy-box {
        background: rgba(255, 255, 255, 0.1);
        padding: 2rem;
        border-radius: 4px;
        margin: 2rem 0rem;
    }

    .philosophy-list {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        list-style: none;
        padding: 0;
        color: #747474;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideInLeft {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes popIn {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    .fade-in {
        animation: fadeIn 1s ease-out;
    }
    .slide-in-left {
        animation: slideInLeft 0.8s ease-out;
    }
    .slide-in-right {
        animation: slideInLeft 0.8s ease-out reverse;
    }
    .pop-in {
        animation: popIn 0.6s ease-out;
    }
    .jump-in {
        animation: popIn 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
</style>
