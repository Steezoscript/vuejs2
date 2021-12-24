 <style>
 input[type="text"], input[type="password"], textarea { outline: none; }
 button:disabled {
  opacity: 0.4;
}
 </style>

 <template>
    <form action="" @submit="createPost(post)" class="space-y-4">
        <h4 class="text-center font-bold">Post creation form</h4>

        <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label for="title" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Title</label>
          <input type="text" id="title" name="title" v-model="post.title" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Post title">
        </div>

        <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label for="title" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Content</label>
          <textarea v-model="post.content" id="title" name="title" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Post content"></textarea>
        </div>

        <button :disabled="!isValid" @click.prevent="createPost(post)" type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <!-- Heroicon name: solid/mail -->
          <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Add Post
        </button>
    </form>
</template>

<script>
    export default {
        name: "CreatePost",
        data() {
            return {
                post: {
                    title: '',
                    content: ''
                }
            }
        },
        methods: {
            createPost(post) {
                this.$store.dispatch('createPost', post)
            }
        },
        computed: {
            isValid() {
                return this.post.title !== '' && this.post.content !== ''
            }
        }
    }
</script>