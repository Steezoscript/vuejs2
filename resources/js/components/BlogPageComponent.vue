<script>
import {mapGetters} from 'vuex'

export default {
    name: "Post",
    mounted() {
        this.$store.dispatch('fetchPost')
    },
    computed: {
        ...mapGetters([
            'post'
        ])
    }
}
</script>

<template>
  <div>
    <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6 w-24">
    		<img src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg" alt="Brown leather key ring with brass metal loops and rivets on wood table." class="w-full h-full object-center object-cover">
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <router-link to="/blogpost/">
            <h3 class="text-base font-semibold text-gray-900">{{ post.content }}</h3>
          </router-link>

        </h3>
        <p class="mt-2 text-sm text-gray-500">Test</p>
      </div>
      <p class="text-sm font-medium text-gray-900">Category</p>
    </div>
  </div>
</template>
