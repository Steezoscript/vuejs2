let mutations = {
    CREATE_POST(state, post) {
        state.posts.unshift(post)
    },
    FETCH_POSTS(state, posts) {
        return state.posts = posts
    },
    FETCH_POST(state, post) {
        return state.post = post
    },
    DELETE_POST(state, post) {
        let index = state.posts.findIndex(item => item.id === post.id)
        state.posts.splice(index, 1)
    },
    CREATE_COMMENT(state, comment) {
        state.comments.unshift(comment)
    },
    FETCH_COMMENTS(state, comments) {
        return state.comments = comments
    },
    DELETE_COMMENT(state, comment) {
        let index = state.comments.findIndex(item => item.id === comment.id)
        state.comments.splice(index, 1)
    }
    
}
export default mutations