<template>
  <div class="about-page">
    about page.
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'about',
  data(){
    return {

    }
  },
  computed: mapState({
    // account: state => state.info,
  }),
  created(){},
  mounted(){},
  methods: {
    // init(){
    //   this.$store.dispatch('', {}).then(res => {}, res => {})
    // }
  },
}
</script>
<style lang="scss">
.about-page{

}
</style>
