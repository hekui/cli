
<template>
  <div class="{{name}}-page">
    {{name}} component. props value: {{prop1}}.
  </div>
</template>
<script>
  export default {
    name: '{{name}}',
    props: {
      prop1: {
        type: String,
        default: 'default'
      },
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
.{{name}}-component{

}
</style>