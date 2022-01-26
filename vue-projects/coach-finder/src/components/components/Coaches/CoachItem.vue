<template>
    <li>
        <h3>{{fullName}}</h3>
        <h4>HourlyRate : ${{rate}} </h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area"> </base-badge>
            <div class="actions">
             <base-button mode="outline" link="true" :to="getCoachePath">Details</base-button>
             <base-button link="true" :to ="getCoachContactPath">Contact</base-button>    
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:['id','firstName', 'lastName', 'rate', 'areas'],
    computed:{
        fullName():string{
            return this.firstName + ' ' + this.lastName
        },
        getCoachePath(): string{
            return this.$route.path + '/'+ this.id
        },
        getCoachContactPath(): string{
            return this.$route.path + '/' +this.id +'/contact'
        }
    }
})
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
