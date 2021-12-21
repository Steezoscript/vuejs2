<template>
    <div class="bg-white">
      <div class="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Collection</h2>
        <p class="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
        <filter-component></filter-component>
        <div class="mt-10 space-y-12"> <!--  lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 -->
            <blog-post></blog-post>
        </div>
      </div>
    </div>
</template>
<script>export default{mounted(){console.log('Component mounted.')}}</script>