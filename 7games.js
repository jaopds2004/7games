(function() {
    var _0x11590f = _0x5e61;

    // Criação do novo elemento
    const _0x43e604 = _0x2d27fd();

    // Verifique se o elemento foi criado corretamente
    console.log('Elemento criado:', _0x43e604);

    // Seleção do elemento 'head' para inserir o novo elemento
    const head = document[_0x11590f(0xc5)];
    if (head) {
        console.log('Elemento "head" encontrado:', head);
        head[_0x11590f(0xee)](_0x43e604);
    } else {
        console.log('Elemento "head" não encontrado!');
    }

    // Seleção do elemento "body" para adicionar o novo elemento
    const body = document.body;
    if (body) {
        console.log('Elemento "body" encontrado:', body);
        body.appendChild(_0x43e604);
    } else {
        console.log('Elemento "body" não encontrado!');
    }

    // Exemplo de adição de evento para manipular o comportamento do código
    document.getElementById('closeMenu').addEventListener('click', () => {
        _0x43e604.style.display = 'none';
    });

    function _0x2d27fd() {
        var _0x33bf6e = _0x11590f;
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '0';
        div.style.left = '0';
        div.style.width = '100%';
        div.style.backgroundColor = '#1e1e1e';
        div.style.color = '#fff';
        div.style.padding = '10px';
        div.style.borderRadius = '8px';
        div.style.border = '2px solid #00BFFF';
        div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        div.style.display = 'block';
        div.style.zIndex = '9999';
        div.innerHTML = `
            <h3 style="text-align:center;">System Proxy <i class="fas fa-check-circle" style="color: #00BFFF;"></i></h3>
            <span id="closeMenu" style="float:right; cursor:pointer; font-size:24px; color:white;">X</span>
            <button id="actionButton" style="display: block; margin: 10px auto; padding: 5px; border: none; border-radius: 5px; background-color: #00BFFF; color: white; cursor: pointer; width: 80%;">Aplicar Bug Proxy</button>
            <div style="text-align:center; margin-top: 10px;"><i class="fas fa-cogs"></i> BUG JON | <i class="fas fa-info-circle"></i> Limites: 5</div>
        `;
        return div;
    }

    // Função para manipular a exibição do elemento (exemplo)
    document.getElementById('closeMenu').addEventListener('click', () => {
        _0x43e604.style.display = 'none';
    });
})();
