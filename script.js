// Развернуть/свернуть список функций
function toggleFunctions() {
    const list = document.getElementById('functionsList');
    const btn = document.querySelector('.expand-btn');
    list.classList.toggle('expanded');
    
    if (list.classList.contains('expanded')) {
        btn.innerHTML = 'Свернуть ▲';
    } else {
        btn.innerHTML = 'Развернуть ▼';
    }
}

// Открыть модальное окно оплаты
function openCardModal(plan, price) {
    document.getElementById('modalPlan').innerText = plan;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('cardModal').classList.add('active');
}

// Закрыть модальное окно
function closeCardModal() {
    document.getElementById('cardModal').classList.remove('active');
}

// Скопировать номер карты
function copyCard() {
    navigator.clipboard.writeText('0000000000000000');
    alert('Номер карты скопирован!');
}

// Закрыть модалку по клику на фон
document.getElementById('cardModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCardModal();
    }
});
