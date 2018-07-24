
<template>
  <div class="toast-page">
    toast component. props value: {{prop1}}.
  </div>
</template>
<script>
  export default {
    name: 'toast',
    props: {
      prop1: {
        type: String,
        default: 'default'
      },
      prop2: String,
    },
    computed: {
      //
    },
    methods: {
      // 
    }
  };
</script>
<style lang="scss">
.toast-component{

}
</style>