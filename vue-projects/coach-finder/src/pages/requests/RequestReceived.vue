<template>
  <section>
    <base-card>  <h1>Requests</h1> </base-card>
    <base-card v-for="message in requests" :key="message.email">
    <div>
    <span :style="{display:'flex', flexDirection:'row'}">Email: <a :href="getEmailLink(message.email)"> <span :style="{fontWeight:'600'}"> {{message.email}} </span></a></span>
    <span :style="{display:'flex', flexDirection:'row'}">Message:   <span :style="{fontWeight:'600'}"> {{message.message}}</span></span>
  
    </div>
    </base-card>
  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RequestReceived',
  data(){
    return{
      requests:[]
    }
  },
  computed:{
    getEmailLink(){
      return (email: string)=> 'mailto:'+ email
    }
  },
  async created(){
    await this.$store.dispatch('coaches/loadCoachMessages')
    const messages = this.$store.getters['coaches/getMessages']
    this.requests = messages;
  }

});
</script>