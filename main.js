document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');

 

    form.addEventListener('submit', function (e) {
        e.preventDefault();

 

        const formData = new FormData(form);

 

        fetch('/salvar-usuario', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Usuário cadastrado com sucesso!');
                form.reset();
            } else {
                alert('Ocorreu um erro ao cadastrar o usuário.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});