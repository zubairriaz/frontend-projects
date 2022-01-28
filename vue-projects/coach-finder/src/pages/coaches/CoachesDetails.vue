<template>
  <section>
    <base-card>
      <div class="align-items">
        <span>Name : <span class="bold">{{ coach.firstName + " " + coach.lastName }}</span></span>
      </div>
      <div class="align-items">
        <span>Hourly Rate : <span class="bold">{{ coach.hourlyRate }} $USD</span> </span>
      </div>
    </base-card>

    <base-card>
      <div class="align-items">
        <span>Description : <span class="bold">{{ coach.description }}</span></span>
      </div>
      <div class="align-items">
        <base-badge v-for="area in coach.areas" :key="area" :title="area" :type="area"></base-badge>
      </div>
    </base-card>

  </section>
  <router-view></router-view>
</template>

<script lang="ts">
import BaseBadge from "@/components/ui/BaseBadge.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import { Coach } from "@/interfaces/Coaches";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { BaseCard, BaseBadge },
  name: "CoachDetails",
  data() {
    return {
      coach: {},
    };
  },
  setup() {
    const route = useRoute();

    return {
      routeId: route.params.id,
    };
  },

  created() {
    const coaches = this.$store.getters["coaches/getCoaches"];
    const coach = coaches.filter((coach: Coach) => coach.id == this.routeId);
    this.coach = coach[0];
  },
});
</script>

<style scoped>
.align-items{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.bold{
  font-weight: 600;
}

</style>
