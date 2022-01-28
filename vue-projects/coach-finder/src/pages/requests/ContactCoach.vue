<template>
  <section>
    <base-card>
      <form @submit="onSubmit">
        <div class="form-control" :class="{ invalid: !state.email.isValid }">
          <label for="email">Email</label>
          <input id="email" v-model="state.email.val" @focus="resetValidation"/>
        </div>
        <div class="form-control" :class="{ invalid: !state.message.isValid }">
          <label for="message">Message</label>
          <textarea id="message" v-model="state.message.val" rows="5" @focus="resetValidation" />
        </div>
        <div class="actions">
          <base-button>Submit </base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script lang="ts">
import { FormItems } from "@/interfaces/Coaches";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactCoach",
  data() {
    return {
      state: {
        email: { val: "", isValid: true },
        message: { val: "", isValid: true },
      } as FormItems,
    };
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault();
      if (
        !this.state.email.val ||
        !String(this.state.email.val).includes("@") ||
        !this.state.message.val
      ) {
        this.validateForm();
        return;
      }
      const formData = {
        message: this.state.message.val,
        email: this.state.email.val
      }
      this.$store.dispatch('coaches/sendMesageToCoach', formData);
      this.$router.replace('/requests');
    },
    validateForm() {
      Object.keys(this.state).map((key: string) => {
        let value = this.state[key].val;
        if (!value) {
          this.state[key].isValid = false;
          return false;
        } else {
          return true;
        }
      });
    },
     resetValidation(event : any){
        let field = event.target.id;
        console.log(field)
        this.state[field].isValid = true
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
