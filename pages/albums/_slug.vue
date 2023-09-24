<script>
  export default {
    async asyncData({ $content, params }) {
      const album = await $content('albums', params.slug).fetch()
      const compositor = await $content('compositors').where({ id: album.compositorId }).only(['name']).fetch()
      const movie = await $content('movies').where({ id: album.movieId }).only(['name']).fetch()
      return { album, compositor, movie }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+album.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{album.title}}</h4>
       <div>
                <p>Compositores: <NuxtLink :to="'/compositors/'+album.compositorId">{{album.compositor}}</NuxtLink></p>   
                  <p> Año publicacion: {{album.year}};</p>
                  <p>Generos: {{album.fields}}</p>
                  <p>Pelicula: <NuxtLink :to="'/movies/'+album.movieId">{{album.movie}}</NuxtLink></p> 
              </div>
	  
	    <nuxt-content :document="album" />
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>