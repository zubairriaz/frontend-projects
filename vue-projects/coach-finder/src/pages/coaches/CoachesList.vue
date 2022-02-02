<template>
  <section>
    <base-card>
      <coach-filter @change-filters="onChangeFilter"></coach-filter>
    </base-card>
  </section>
  <section v-show="showLoader">
  <base-spinner></base-spinner>
  </section>
  <section v-show="!showLoader">
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button v-if="!isCoach" link="true" to="/register"
          >Register as Coach</base-button
        >
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
import { Coach } from "../../interfaces/Coaches";
import CoachItem from "../../components/components/Coaches/CoachItem.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import CoachFilter from "../../components/components/Coaches/CoachFilter.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import { Items } from "../../interfaces/Coaches";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

export default defineComponent({
  name: "CoachesList",
  components: {
    CoachItem,
    BaseButton,
    CoachFilter,
    BaseCard,
    BaseSpinner,
  },
  data() {
    return {
      coaches: [] as Coach[] | [],
      showLoader: false
    };
  },
  watch:{
   getCoaches(coaches){
    this.coaches = coaches
   }
  },
  methods: {
    onChangeFilter(filters: Items) {
      const filterToApply = Object.keys(filters).filter(
        (key) => filters[key] == true
      );
      let updatedCoaches = this.getCoaches.filter((coach) => {
        if (filterToApply && filterToApply.length == 0) {
          return true;
        }
        let { areas } = coach;
        let j = 0;
        while (filterToApply[j]) {
          if (areas.indexOf(filterToApply[j]) == -1) {
            return false;
          }
          j++;
        }
        return true;
      });
      this.coaches = updatedCoaches;
    },
    async loadCoaches() {
      this.showLoader = true;
      await this.$store.dispatch("coaches/loadCoaches");
      this.coaches = this.getCoaches;
      this.showLoader = false
    },
  },
  created() {
    this.loadCoaches();
  },
  computed: {
    getCoaches(): Coach[] {
      return this.$store.getters["coaches/getCoaches"];
    },
    hasCoaches(): boolean {
      return this.$store.getters["coaches/hasCoaches"];
    },
    isCoach(): boolean {
      return this.$store.getters["coaches/isCoach"];
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
