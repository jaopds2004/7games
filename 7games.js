javascript:(function() {
    const _0x5ded = function() {
        return [
            'appendChild', 'querySelector', 'clientX', 'innerHTML', 'createElement',
            'removeChild', 'getElementById', 'boxShadow', 'body', 'head', 'value',
            'background', 'position', 'fixed', 'border', 'actionButton', 'clientY', 
            'copy', 'display', 'position', 'outline', 'top', 'left', 'height', 'width',
            'click', 'text-align', 'opacity', 'opacity', 'background', 'button', 'margin',
            'color', 'top', 'left'
        ];
    };

    const _0x3d5366 = _0x5ded();
    function _0x5e61(a, b) {
        return _0x3d5366[a] || b;
    }

    // Função que injeta conteúdo no corpo do jogo/página
    const _0x2d27fd = function() {
        const _0x33bf6e = _0x5e61;
        const _0x5b5411 = document.createElement('div');
        _0x5b5411.style.position = 'fixed';
        _0x5b5411.style.top = '50%';
        _0x5b5411.style.left = '50%';
        _0x5b5411.style.transform = 'translate(-50%, -50%)';
        _0x5b5411.style.width = '300px';
        _0x5b5411.style.height = 'auto';
        _0x5b5411.style.backgroundColor = '#000';
        _0x5b5411.style.color = '#fff';
        _0x5b5411.style.padding = '20px';
        _0x5b5411.style.borderRadius = '8px';
        _0x5b5411.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        _0x5b5411.innerHTML = '<h3 style="text-align: center;">Proxy System</h3><p style="text-align: center;">Aplicar Bug Proxy</p>';
        
        const closeButton = document.createElement('span');
        closeButton.innerText = 'X';
        closeButton.style.float = 'right';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontSize = '24px';
        closeButton.style.color = 'white';
        closeButton.onclick = function() {
            _0x5b5411.remove();
        };

        _0x5b5411.appendChild(closeButton);
        document.body.appendChild(_0x5b5411);
    };

    // Função que lida com o clique e injeta algo no jogo
    document.addEventListener('DOMContentLoaded', () => {
        _0x2d27fd();  // Chama a função de injeção após o carregamento da página
    });
})();
