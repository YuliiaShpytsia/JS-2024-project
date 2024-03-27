fetch('https://jsonplaceholder.typicode.com/users')
    .then((asd) => asd.json())
    .then((users) => {
        let box = document.createElement('div');
        box.classList.add('box')
        for (const {id, name} of users) {
            let div = document.createElement('div');
            div.classList.add('user')
            let p = document.createElement('p');
            p.classList.add('info')
            let src = document.createElement('a');
            src.classList.add('ref')
            p.innerText = `${id} - ${name};`;
            src.href = `user-details.html?id=${id}`
            src.innerText = 'Click here for more info'
            src.classList.add('src')
            div.append(p, src)
            box.appendChild(div)
        }
        document.body.appendChild(box)
    });


