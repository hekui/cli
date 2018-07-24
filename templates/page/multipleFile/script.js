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