let userId = new URL(location.href).searchParams.get('id');
let baseURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
let postsURL = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
fetch(baseURL)
    .then(response => response.json())
    .then((user) => {
        let container = document.createElement('div');
        container.classList.add('container')
        let h4 = document.createElement('h2');
        h4.innerText = user.id +'.' + ' ' + user.name;
        let p1 = document.createElement('p');
        p1.innerText = `Username: ${user.username}, email: ${user.email}`
        let adr = document.createElement('p');
        adr.innerText = `Address: ${user.address.zipcode}, ${user.address.city}, ${user.address.street} ${user.address.suite};
                Geo: ${user.address.geo.lat}, ${user.address.geo.lng}.`;
        let cont = document.createElement('p');
        cont.innerText = `Phone: ${user.phone}; Website: ${user.website}`;
        let p2 = document.createElement('p');
        p2.innerText = `Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`;
        let button = document.createElement('button');
        button.classList.add('userPosts')
        button.innerText = 'Posts of current user';
        button.onclick = function() {
                fetch(postsURL)
                    .then(response => response.json())
                    .then((posts) => {
                          console.log(posts)
                          let postBox = document.createElement('div');
                          postBox.classList.add('postBox');
                          for (const post of posts) {
                              let div = document.createElement('div');
                              div.classList.add('postTitle')
                              let pt = document.createElement('p')
                              pt.innerText = post.title;
                              let button2 = document.createElement('button');
                              button2.innerText = 'View more details';
                              button2.addEventListener('click', () => {
                                      location.href = `post-details.html?postId=${post.id}`
                              })
                              div.append(pt, button2)
                              postBox.append(div);
                              document.body.appendChild(postBox)
                          }
                    })
        }
        container.append(h4, p1, adr, cont, p2, button);
        document.body.appendChild(container);
    })