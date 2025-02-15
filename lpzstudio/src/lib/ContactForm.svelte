<script>
const sendForm = ev =>{
    ev.preventDefault();
    const data = new FormData(ev.target);
    console.log(data);
}
</script>

<div class="form-container">
    <form onsubmit={sendForm}>
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
        </div>

        <div class="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Enviar Mensaje</button>
    </form>
</div>

<style>
    .form-container {
        background: #ffffff1a;
        padding: 2rem;
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.308);
        width: 100%;
        max-width: 500px;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #555;
        font-weight: bold;
    }

    input,
    textarea {
        color: #f0f0f0;
        width: 100%;
        background-color: #081016;
        padding: 0.8rem;
        border: 2px solid #081016;
        border-radius: 4px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #007bff;
    }

    textarea {
        resize: vertical;
        min-height: 150px;
    }

    button {
        background: #b22222;
        color: white;
        padding: 1rem 2rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: 100%;
    }

    button:hover {
        background: #721515;
    }

    @media (max-width: 600px) {
        .form-container {
            margin: 1rem;
            padding: 1.5rem;
        }
    }
</style>
