document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const number = document.getElementById('number').value;

    const validUsers = {
        'Ayoub': '0633549914',
        'Achraf': '0618764618',
        'Asia': '0720980672',
    };

    if (validUsers[username] === number) {
        window.location.href = 'index1.html';
    } 
});
