setTimeout(() => {
    const div = document.createElement('div');

    div.innerText = 'Hello, TestCafe!';

    document.body.appendChild(div);
}, 10);
