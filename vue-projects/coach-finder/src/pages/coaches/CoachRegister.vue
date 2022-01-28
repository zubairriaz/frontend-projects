<template>
  <section>
    <base-card>
      <h1>Register as a Coach</h1>
    </base-card>
    <base-card>
      <div class="form-control" :class="{invalid:!state.firstName.isValid}">
        <label for="firstName">First Name</label>
        <input id="firstName" v-model="state.firstName.val" @focus="resetValidation" />
      </div>
      <div class="form-control" :class="{invalid:!state.lastName.isValid}">
        <label for="lastName">Last Name</label>
        <input id="lastName" v-model="state.lastName.val" @focus="resetValidation" />
      </div>
      <div class="form-control" :class="{invalid:!state.description.isValid}">
        <label for="description">Description</label>
        <textarea id="description" v-model="state.description.val" rows="5" @focus="resetValidation" />
      </div>

      <div class="form-control" :class="{invalid:!state.hourlyRate.isValid}">
        <label for="hourlyRate">Hourly Rate</label>
        <input type="number" id="hourlyRate" v-model="state.hourlyRate.val"  @focus="resetValidation"/>
      </div>
      <div class="form-control" :class="{invalid:!state.areas.isValid}">
        <label for="areas">Areas </label>
        <div class="checkbox-display">
          <div class="display-inline">
            <input
              type="checkbox"
              id="areas"
              value="frontend"
              v-model="state.areas.val"
              @focus="resetValidation"
            />
            <span>Frontend</span>
          </div>
          <div class="display-inline">
            <input type="checkbox" id="areas" value="backend" v-model="state.areas.val" />
            <span>Back End</span>
          </div>
          <div class="display-inline">
            <input type="checkbox" id="areas" value="career" v-model="state.areas.val" />
            <span>Career</span>
          </div>
        </div>
      </div>
      <base-button @click="onSubmit">Submit</base-button>
    </base-card>
  </section>
</template>

<script lang="ts">
import BaseCard from "@/components/ui/BaseCard.vue";
import { FormItems } from "@/interfaces/Coaches";
import { defineComponent } from "vue";

export default defineComponent({
  components: { BaseCard },
  name: "CoachRegister",
  data() {
    return {
      state: {
        firstName: { val: "", isValid: true },
        lastName: { val: "", isValid: true },
        hourlyRate: { val: 0, isValid: true },
        description: { val: "", isValid: true },
        areas: { val: [], isValid: true },
      } as FormItems,
    };
  },
  methods: {
    onSubmit() {
      const isValid = this.validateForm();
      if(!isValid){
        return
      }
      const formData = {
        firstName: this.state.firstName.val,
        lastName: this.state.lastName.val,
        areas: this.state.areas.val,
        description: this.state.areas.val,
        hourlyRate: this.state.hourlyRate.val,
      };
      console.log(formData);
      this.$store.dispatch("coaches/registerCoach", formData);
      this.$router.replace("/coaches");
    },
    resetValidation(event : any){
        let field = event.target.id;
        console.log(field)
        this.state[field].isValid = true
    },
    validateForm(): boolean {
      const mapArray = Object.keys(this.state).map((key: string) => {
        let value = this.state[key].val;
        if (Array.isArray(value) && value.length == 0 || !value) {
          this.state[key].isValid = false
          return false
        }
        else{
          return true
        }
      });


      return mapArray.every(x=>x== true);
    },
  },
});
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.display-inline {
  display: flex;
  flex-direction: row;
}
</style>
