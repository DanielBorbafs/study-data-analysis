document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', function (e) {
        let value = e.target.value;

        // Remove qualquer coisa que não seja número
        value = value.replace(/\D/g, '');

        // Adiciona a formatação
        if (value.length <= 3) {
            value = value.replace(/(\d{0,3})/, '$1');
        } else if (value.length <= 6) {
            value = value.replace(/(\d{3})(\d{0,3})/, '$1.$2');
        } else if (value.length <= 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
        } else {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
        }

        e.target.value = value;
    });

    cpfInput.addEventListener('focusout', function () {
        validarCPF(cpfInput.value);
    });
});