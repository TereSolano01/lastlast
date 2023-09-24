<script>
  export default {
    async asyncData({ $content, params }) {
      const movie = await $content('movies', params.slug).fetch()
      const albums = await $content('albums').where({ movieId: params.slug }).fetch()
      return { movie, albums }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+movie.image">
     </div>
     <div class="six columns">
       <h4>{{movie.Título}}</h4>
       <div>  
                  <p> Director: {{movie.Director}}</p>
                  <p>Año: {{movie.year}}</p>
                  <p>Genero: {{movie.genero}}</p>
              </div>
	    <nuxt-content :document="movie" />
	 </div>
	 <div class="three columns"></div>
	   <h5>Albums</h5>
	   <ul>
	     <li v-for="album of albums" :key="album.slug">
	       <NuxtLink :to="{ name: 'albums-slug', params: { slug: album.slug } }">{{album.title}}</NuxtLink>
	     </li>
	   </ul>
   </div>
   <FooterView />
 </div>
</template>