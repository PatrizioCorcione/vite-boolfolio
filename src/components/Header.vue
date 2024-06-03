<script>

</script>

<template>
  <div class="header">
    <ul>
      <li class=""><router-link class="li-style btn btn-outline-secondary" :to="{name:'home'}">Home</router-link></li>
      <li class=""><router-link class="li-style btn btn-outline-secondary" :to="{name:'about'}">Chi sono</router-link></li>
      <li class=""><router-link class="li-style btn btn-outline-secondary" :to="{name:'contact'}">Contatti</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header{
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  ul{
    display: flex;
    list-style: none;
    margin: 0;
    .li-style {
      text-decoration: none;
      margin-right: 50px;
      color: white;
      font-size: 1rem;
      text-align: center;
      padding: 0px 10px;
    }
  }
}
</style>