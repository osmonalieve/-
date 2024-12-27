// Түнкү/күндүзгү режимди алмаштыруучу кнопканы табуу
const themeToggleButton = document.getElementById('theme-toggle');

// Күндүзгү жана түнкү режимдер үчүн функция
themeToggleButton.addEventListener('click', function() {
    // Түнкү режимди кошуу/алууга
    document.body.classList.toggle('dark-mode');
    
    // Кнопканын текстин өзгөртүү
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Түнкү режим'; // Күндүзгү режимге өтүү
    } else {
        themeToggleButton.textContent = 'Күндүзгү режим'; // Түнкү режимге өтүү
    }
});


// Издөө функциясы (колдонуучунун киргизген текстине жараша)
document.getElementById('search-btn').addEventListener('click', function() {
    const searchText = document.getElementById('search-bar').value;
    
    if (searchText.trim()) {
        alert('Издеп жаткан нерсе: ' + searchText);
        // Мында сиздин издөө функцияңыз серверден маалымат алып, натыйжаларды көрсөтүшү керек
    } else {
        alert('Сураныч, издөөнү киргизиңиз');
    }
});