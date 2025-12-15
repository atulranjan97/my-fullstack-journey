const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
]

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         })

//         document.body.innerHTML = output;
//     }, 1000)
// }

function getPosts() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title}</li>`
            })

            document.body.innerHTML = output;
            
            res();
        }, 1000)
    })
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000)
    })
}


// Async-await
async function init() {
   await createPost({title: 'Post Three', body: 'This is post three'});     // we are waiting for this to be done until we move on and execute the next line of code.
    // await does just that it waits for an asynchronous process or action to complete.

   getPosts(); 
}

init();




// async-await with fetch
async function fetchUsers() {
   const res = await fetch('https://jsonplaceholder.typicode.com/users'); 

   const data = await res.json();
    
   console.log(data);
}

fetchUsers();