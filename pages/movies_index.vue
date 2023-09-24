<script>
  export default {
    async asyncData({ $content, params }) {
      const movies = await $content('movies').fetch()
      return {
        movies
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Movies Information</h3>
     <p>This section presents information about publishers</p>
   <ul>
     <li v-for="movie of movies" :key="movie.slug">
       <NuxtLink :to="{ Título: 'movies-slug', params: { slug: movie.slug } }">{{movie.Título}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>