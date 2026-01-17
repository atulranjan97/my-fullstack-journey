const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');
const form = document.querySelector('#add-post-form');

async function showPosts() {
    try {
        const res = await fetch('http://localhost:8080/api/posts');

        console.log(res);

        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await res.json();
        console.log(posts);
        output.innerHTML = '';

        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
        });
    } catch (error) {
        console.log('Error fetching post: ', error);
    }
}

// Submit new post
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:8080/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})  // { title } is shorthand of { title: title }
        })
        // here we are sending a post request to the url /api/posts along with raw JSON body.
        // app.use(express.json()) must be added on server.js because it parses raw JSON and then req.body will return us the data object
    
        if (!res.ok) {
            throw new Error('Failed to add post');
        }

        const newPost = await res.json();
        const postEl = document.createElement('div');
        postEl.textContent = newPost.title;
        output.appendChild(postEl);
        showPosts();
    } catch (error) {
        console.error(error.message);
    }
}

// Event listeners
button.addEventListener('click', showPosts);
form.addEventListener('submit', addPost);