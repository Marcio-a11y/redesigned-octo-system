document.getElementById('patient-login').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login do paciente realizado com sucesso!');
    document.getElementById('info').classList.remove('hidden');
});

document.getElementById('doctor-login').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login do médico realizado com sucesso!');
    document.getElementById('info').classList.remove('hidden');
});
