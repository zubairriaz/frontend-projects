<template>
  <section>
    <base-card>
      <coach-filter @change-filters="onChangeFilter"></coach-filter>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link="true" to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in coaches"
          :key="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :id="coach.id"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Coach, CoachState } from "../../interfaces/Coaches";
import CoachItem from "../../components/components/Coaches/CoachItem.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import CoachFilter from "../../components/components/Coaches/CoachFilter.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default defineComponent({
  name: "CoachesList",
  components: {
    CoachItem,
    BaseButton,
    CoachFilter,
    BaseCard,
  },
  data(){
    return{
    coaches : [] as Coach[] | []
  }},
  methods:{
    onChangeFilter(filters : any){
        const filterToApply = Object.keys(filters).filter(key=>filters[key] == true)
        let updatedCoaches = this.coaches.filter(coach=>{
          console.log(filterToApply)
             if(filterToApply && filterToApply.length == 0){
               return true
             }
             let {areas} = coach;
             let j = 0;
             while(filterToApply[j]){
               if(areas.indexOf(filterToApply[j]) == -1){
                 return false
               }
               j++
             }
             return true;
        })
        console.log(updatedCoaches);
        this.coaches = updatedCoaches

    }
  },
  created(){
    this.coaches = this.$store.getters["coaches/getCoaches"];
  },
  computed: {

    hasCoaches(): boolean {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
