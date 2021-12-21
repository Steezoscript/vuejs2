let actions = {
    createPost({commit}, post) {
        this.$axios.post('/api/posts', post)
            .then(res => {
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
    }
}

export default actions