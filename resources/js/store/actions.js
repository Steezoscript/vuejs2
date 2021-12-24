let actions = {
    createPost({commit}, post) {
        this.$axios.post('/api/posts', post)
            .then(res => {
                if (res.data === 'unauthorized')
                    alert('You are not authorized to create this post!')
                else
                    commit('CREATE_POST', res.data)
            }).catch(err => {
            console.log(err)
        })
      
    },
    fetchPosts({commit}) {
        this.$axios.get('/api/posts')
            .then(res => {
                commit('FETCH_POSTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchPost({commit}) {
        this.$axios.get('/api/post')
            .then(res => {
                commit('FETCH_POST', res.data)
                console.log(res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletePost({commit}, post) {
        this.$axios.delete(`/api/posts/${post.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_POST', post)
                else if (res.data === 'unauthorized')
                    alert('You are not authorized to delete this post!')
            }).catch(err => {
            console.log(err)
        })
    },
    createComment({commit}, comment) {
        this.$axios.post('/api/comments', comment)
            .then(res => {
                if (res.data === 'unauthorized')
                    alert('You are not authorized to create this comment!')
                else
                    commit('CREATE_COMMENT', res.data)
            }).catch(err => {
            console.log(err)
        })
      
    },
    fetchComments({commit}) {
        this.$axios.get('/api/posts')
            .then(res => {
                commit('FETCH_COMMENTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteComment({commit}, comment) {
        this.$axios.delete(`/api/comments/${comment.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_COMMENT', comment)
                else if (res.data === 'unauthorized')
                    alert('You are not authorized to delete this comment!')
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions