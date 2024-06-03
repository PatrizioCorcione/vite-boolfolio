<script>
export default {
  props: {
    titleP: String,
    typeP: String,
    descriptionP: String,
    githubP: String,
    technoP: Array, // Cambiato da Object a Array
  },
  mounted() {
    
  }
}
</script>

<template>
  <tr>
    <td>
      <a :href="githubP" class="text-decoration-none link-wrapper">
        <span class="list-title">{{ titleP }}</span>
        <span class="list-type">{{ typeP }}</span>
        <div class="mt-3">
          <div>
            <span class="badge text-bg-danger" v-if="technoP.length === 0">Nessuna tecnologia usata</span>
            <span v-for="(techno, index) in technoP" :key="index" class="badge me-1 text-bg-primary">
              {{ techno.technologies }}
            </span>
          </div>
        </div>
      </a>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
td {
  text-decoration: none;
  background-color: #080808;
  color: white;
  border-bottom: 2px solid #1f1f1f;
  padding: 10px 25px;
  transition: padding 0.3s;
  &:hover {
    background-color: rgba(174, 174, 174, 0.156);
    padding: 10px 25px 10px 30px;
  }
  .link-wrapper {
    display: block; /* Make the link cover the entire td */
    height: 100%; /* Cover the full height */
    color: inherit; /* Inherit text color */
  }
  .list-title {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  .list-type {
    font-size: 0.7rem;
    text-transform: uppercase;
    border: 2px solid #1f1f1f;
    float: inline-end;
    padding: 5px 10px;
    border-radius: 10px;
  }
}
</style>
