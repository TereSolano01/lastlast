<script>
  export default {
    async asyncData({ $content, params }) {
      const compositor = await $content('compositors', params.slug).fetch()
      const albums = await $content('albums').where({ compositorId: params.slug }).fetch()
      return { compositor, albums }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+compositor.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{compositor.name}}</h4>
       <div>
                  <p> Nacionalidad: {{compositor.nationality}}</p>
                  <p>Año de nacimiento: {{compositor.birth_year}}</p>
                  <p>Fields: {{compositor.fields}}</p>
              </div>
	    <nuxt-content :document="compositor" />
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