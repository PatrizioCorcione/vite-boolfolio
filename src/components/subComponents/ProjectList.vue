<script>
import { store } from '../../store';
import ProjectCard from './ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    toSearch: {
      get() {
        return this.store.toSearch;
      },
      set(value) {
        this.store.toSearch = value;
      },
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <h2>All My Projects</h2>
      <form class="w-100" role="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input 
        v-model="toSearch" 
        @keyup="$emit('search')"
        class="w-100" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <div class="project-list my-5">
        <div v-for="project in store.projects" :key="project.id">
          <table class="table m-0">
            <tbody>
              <ProjectCard
                :titleP="project.title"
                :typeP="project.type.type"
                :technoP="project.technologies"
                :githubP="project.github"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-list{
  border: 2px solid #1f1f1f;
  border-radius: 4px;
}
h2 {
  font-size: 5rem;
  color: white;
  font-weight: bold;
}
form {
  position: relative;
  width: 100%;
  input {
    color: white;
    background-color: #1f1f1f;
    width: 100%;
    padding: 10px 10px 10px 40px;
    border: 2px solid #1f1f1f;
    outline: none;
    &:active {
      border: 2px solid #0d6efd;
    }
    &:focus {
      border-color: #007bff;
    }
    &:hover {
      border: 2px solid #0d6efd;
    }
  }
  i {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
  }
}
</style>
