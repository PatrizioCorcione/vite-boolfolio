<script>
import { store } from '@/store';
import axios from 'axios';
import Loader from '../components/subComponents/Loader.vue';

export default {
  components:{
    Loader
  },
  data() {
    return {
      success: false,
      errors: {},
      name: '',
      email: '',
      message: '',
      loaderCond: false,
    };
  },
  methods: {
    sendEmail() {
      this.loaderCond=true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      axios.post(store.apiUrl + 'send-email', data)
        .then(result => {
          this.loaderCond = false;
          this.success = result.data.success;
          if (result.data.errors) {
            this.errors = result.data.errors;
          } else {
            this.errors = {};
          }
        })
        .catch(err =>{
          loaderCond=false
        })
        
    }
  }
};
</script>

<template>
  <div class="container contact">
    <div v-if="success">
      <p class="py-5 fs-1">Grazie del tuo interessamento</p>
    </div>
    <Loader v-if="loaderCond"/>
    <form v-else v-show="!success" class="py-5" @submit.prevent="sendEmail">
      <h2>CONTATTI</h2>
      <div class="row">
        <div class="mb-3 col-6">
          <label for="name" class="form-label">Name</label>
          <input :class="{'is-invalid': errors.name}" v-model="name" type="text" class="form-control" name="name" id="name" placeholder="name">
          <small v-if="errors.name">{{ errors.name[0] }}</small>
        </div>
        <div class="mb-3 col-6">
          <label for="email" class="form-label">Email address</label>
          <input :class="{'is-invalid': errors.email}" v-model="email" type="email" class="form-control" name="email" id="email" placeholder="name@example.com">
          <small v-if="errors.email">{{ errors.email[0] }}</small>
        </div>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Example textarea</label>
        <textarea :class="{'is-invalid': errors.message}" v-model="message" class="form-control" name="message" id="message" rows="3"></textarea>
        <small v-if="errors.message">{{ errors.message[0] }}</small>
      </div>
      <button type="submit" class="btn btn-outline-secondary">Submit</button>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.contact{
  height: 100vh;
  text-align: center;
  color: white;
  background-color: #080808;
}
</style>