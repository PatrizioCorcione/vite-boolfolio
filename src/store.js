import { reactive } from "vue";
export const store = reactive({
  projects:[],
  apiUrl:'http://127.0.0.1:8000/api/project',
  page:1,
  last_page:0,
});