<template>
  <div class="{{name}}-page">
    {{name}} page.
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: '{{name}}',
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
.{{name}}-page{

}
</style>
