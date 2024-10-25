import { reactive } from "vue";
export const store = reactive({
  apiUrl:'https://laravel-api-production-a3ce.up.railway.app/api/',
  projects:[],
  technologies:[],
  types:[],
  typeValue:'',
  githubShow:'',
  searchQuery: '',
});