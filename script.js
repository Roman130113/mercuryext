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