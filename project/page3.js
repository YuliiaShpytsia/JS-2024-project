let postId = new URL(location.href).searchParams.get('postId');
let postURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
let comURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
fetch(postURL)
    .then((response) => response.json())
    .then((post) => {
        console.log(post)
        let div = document.createElement('div');
        div.classList.add('firstDiv')
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        h3.innerText = `UserId: ${post.userId}, Id: ${post.id};`
        p1.innerText = `Title: ${post.title};`
        p2.innerText = post.body;
        div.append(h3, p1, p2);
        document.body.appendChild(div)
    });
setTimeout(function () {
    fetch(comURL)
        .then(response => response.json())
        .then((comments) => {
            let container = document.createElement('div');
            container.classList.add('secondDiv')
            for (const comment of comments) {
                let box = document.createElement('div');
                box.classList.add('thirdDiv')
                let a1 = document.createElement('p');
                let a2 = document.createElement('p');
                let a3 = document.createElement('p');
                let a4 = document.createElement('p');
                a1.innerText = `PostId: ${comment.postId}, ID: ${comment.id}`
                a2.innerText = `From: ${comment.email}`
                a3.innerText = `Title: ${comment.name}`
                a4.innerText = `Text: ${comment.body}`
                box.append(a1, a2, a3, a4);
                container.appendChild(box)
                document.body.appendChild(container)
            }
        })
}, 1000);
