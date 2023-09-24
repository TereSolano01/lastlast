<script>
  export default {
    async asyncData({ $content, params }) {
      const albums = await $content('albums').fetch()
      return {
        albums
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Books Information</h3>
     <p>This section presents information about books</p>
   <ul>
     <li v-for="album of albums" :key="album.slug">
       <NuxtLink :to="{ name: 'albums-slug', params: { slug: album.slug } }">{{album.title}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>