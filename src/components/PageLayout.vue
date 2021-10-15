<template>
<div class="wrapper">

  <Header></Header>
  <Sidebar></Sidebar>
  <MainContent></MainContent>
</div>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import MainContent from './Maincontent.vue'
export default {
  name: 'PageLayout',
  props: {
    msg: String
  },
  components : {
    Header,
    Sidebar,
    MainContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

