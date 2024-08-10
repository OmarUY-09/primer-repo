document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    const music = document.getElementById('music');
    
    function showMessage() {
        message.style.display = 'block';
        music.play();
        setTimeout(function() {
            message.style.display = 'none';
        }, 5000); // El mensaje permanecerá visible por 5 segundos
    }

    document.getElementById('red-flower').addEventListener('click', function() {
        showMessage();
    });

    document.getElementById('violet-flower').addEventListener('click', function() {
        showMessage();
    });

    document.getElementById('yellow-flower').addEventListener('click', function() {
        showMessage();
    });
});
