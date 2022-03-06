export function Modal() {
    return(
        <div id="modal">
            <h1>Chat.io</h1>

            <form id="send-name">
                <input type="text" name="user-name" id="user-name" placeholder="Digite seu nome" />

                <button type="submit">Iniciar!</button>
            </form>
        </div>
    );
}