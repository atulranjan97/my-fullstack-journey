let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]
// let's just pretend that this is in the database


// in our controller method we'd like to have a description and a comment just saying what it does (it's a good practice)

// @desc    Get all posts 
// @route   GET /api/posts
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    // isNaN is a function that will returns true if the value is not a valid number and false if the value is a valid number

    res.status(200).json(posts);
}


// @desc    Get single post 
// @route   GET /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        // error.status = 404;
        return next(error);
    } 

    res.status(200).json(post);
}  


// @desc    Create new post
// @route   POST /api/posts
export const createPost = (req, res, next) => {
    console.log(req.body);

    const newPost = {
        id: posts.length + 1, // in reality, you'd be adding it to a database and most of the time database is going to give you the id automatically
        title:  req.body.title
    }

    if (!newPost.title) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
        // Calling `next(error)` skips all remaining route handlers and jumps straight to error-handling middleware.
        // Because next(error) was called, Express looks for middleware with 4 parameters
    }
     
    posts.push(newPost);    // now obiviously this new post is not gonna persist, if we restart the server it's gonna just go away because it's not being put in the database
    res.status(201).json(posts);
    // 201 means successful and something was created
}  


// @desc    Update post
// @route   PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    // `Array.prototype.find()` returns the first matching element by reference, meaning it points to the same object stored in the array, so any changes made to the returned object will also affect the original object in the array unless you explicitly create a copy. 

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    } 
    
    console.log(req.body);
    post.title = req.body.title;
    res.status(201).json(posts);
}


// @desc    Delete post
// @route   DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    } 

    console.log(req.body);

    posts = posts.filter(post => post.id !== id);   // here we're overwriting the posts array that's why we used let keyword to define the array (important)
    res.status(201).json(posts);
}

