<script>
import {store} from '../../store'
import ProjectCard from './ProjectCard.vue'

export default{

  components: { 
    ProjectCard, 
  },

  data() {
    return {
      store,
    }
  },
}

</script>

<template>
  <div>
    <div class="container ">
      <h2> All My Projects</h2>
      <form class="w-100" role="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="w-100" type="search" placeholder="Search" aria-label="Search">
      </form>
      <div class="project-list my-5">
        <div 
          v-for="project in store.projects" 
          :key="project.id"
          >
          <table class="table">
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
        <!-- <nav aria-label="Page navigation example">
          <ul class="pagination">
            
            <li v-for="link in store.links" 
            :key="link.id" class="page-item text-white" 
            @click=" store.apiUrl = link.url, $emit('emitNext')" v-html="link.label.replace('Next', '').replace('Previous', '')">
            </li>

          </ul>
        </nav> -->
      </div>
    
  </div>
    
  </div>
</template>

<style  lang="scss" scoped>
h2{
  font-size: 5rem;
  color: white;
  font-weight: bold;
}
form{
  position: relative;
  width: 100%;
  input{
    background-color: #1f1f1f;
    width: 100%;
    padding: 10px 10px 10px 40px;
    border: 2px solid #1f1f1f;
    outline: none; 
    transition: border-color 0.3s;
    border-radius: 4px;
    color: lightgrey;
    &:active{
      border: 2px solid #0d6efd;
    }
    &:focus { border-color: #007bff; }
    &:hover { border: 2px solid #0d6efd; }
  }
  i{
    position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
  }
}
.project-list{
//   height: 100vh;
//   nav{
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 20px;
//     ul{
//       margin: 0;
//       li{
//         background-color: #212529;
//         cursor: pointer;
//         padding: 5px 15px;
//         border-right: 1px solid gray;
//         &:last-child{
//           border: none;
//           border-end-end-radius: 15px;
//           border-top-right-radius: 15px;
//         }
//         &:first-child{
//           border-start-start-radius: 15px;
//           border-bottom-left-radius: 15px;
//         }
//         &:hover{
//           background-color:#0d6efd ;
//         }
//       }
//     }
//   }
// }

  border: 2px solid #1f1f1f;
  border-radius: 4px;
  .table{
    margin: 0;
  }
}

</style>