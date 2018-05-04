<template>
  <div>
    <v-head title="红包购买"/>
    <div style="position: relative;overflow-x: hidden">
     <template v-for="i in 10">
       <red-item :theme="true"/>
     </template>
    </div>
  </div>
</template>

<script>
  import VHead from '../../../components/VHead.vue';
  import redItem from './component/redItem.vue';

  export default {
    name: 'redPurchase',
    components: {VHead, redItem}
  }
</script>

<style scoped>

</style>
