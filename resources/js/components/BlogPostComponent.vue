<script>
import {mapGetters} from 'vuex'

export default {
    name: "Posts",
    mounted() {
        this.$store.dispatch('fetchPosts')
    },
    methods: {
        deletePost(post) {
            this.$store.dispatch('deletePost',post)
        }
    },
    computed: {
        ...mapGetters([
            'posts'
        ])
    }
}
</script>

<template>
    <div>
        <h4 class="text-center font-bold">Posts</h4>
        <table class="table table-striped w-full">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts">
                <td>{{post.title}}</td>
                <td>{{post.content}}</td>
                <td>
                    <button class="btn btn-danger" @click="deletePost(post)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>