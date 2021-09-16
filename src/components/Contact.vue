<template>
  <v-container class="form">
    <v-card-title class="text-h5">Contact Zachary</v-card-title>
    <v-form v-model="valid" class="mx-4">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field v-model="lastname" label="Last name"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            :rules="messageRules"
            filled
            label="Message"
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn :disabled="!valid" large type="submit" class="form__button"
            >Send Message</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [(v) => !!v || "First name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [(v) => !!v || "Message is required"],
  }),
};
</script>

<style lang="scss">
@media (prefers-color-scheme: light) {
  .form {
    background-color: #bec6f3;
    color: #360000;
  }

  .v-text-field .v-label {
    color: #360000 !important;
  }

  .v-input__slot:before {
    border-color: #360000 !important;
  }
}
@media (prefers-color-scheme: dark) {
  .form {
    background-color: #360000;
    color: #bec6f3;

    &__button {
      color: #bec6f3;
    }
  }

  .v-text-field .v-label,
  .v-text-field .v-label--active {
    color: #bec6f3 !important;
  }

  .v-input__slot:before {
    border-color: #bec6f3 !important;
  }
  .v-input input,
  .v-input textarea {
    color: #bec6f3 !important;
  }
}
</style>
