<template>
  <v-container class="form">
    <v-form v-model="valid" class="mx-8 mb-6" @submit.prevent="sendEmail">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            name="firstname"
            v-model="firstname"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            name="lastname"
            v-model="lastname"
            label="Last name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            name="email"
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
            name="message"
            v-model="message"
            :rules="messageRules"
            filled
            label="Message"
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-right">
          <v-btn :disabled="!valid" type="submit" class="form__button"
            >Send Message</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";

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
    snackbarSuccess: false,
    text: `Hello, I'm a snackbar`,
    snackbarFail: false,
  }),
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_1vw3h5i",
          "template_u4k6esy",
          e.target,
          "user_DfC4G6FpB922cevUdEDeh"
        )
        .then(
          (result) => {
            alert("Message Sent!");
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            alert("There was a problem sending your message, please try again");
            console.log("FAILED...", error);
          }
        )
        .bind(this);
    },
  },
};
</script>

<style lang="scss">
.form {
  background-color: #bec6f3;
  color: #360000;

  &__button {
    background-color: #360000 !important;
    color: #bec6f3 !important;
    font-family: "Raleway", sans-serif !important;
    font-weight: 600;
  }
}

.v-text-field .v-label,
.v-text-field .v-label--active {
  color: #360000 !important;
  font-family: "Raleway", sans-serif !important;
  font-weight: 600;
}

.v-input__slot:before,
.v-input__slot:after {
  border-color: #360000 !important;
}

.error--text {
  color: red !important;
}

@media (prefers-color-scheme: dark) {
  .form {
    background-color: #360000;
    color: #bec6f3;

    &__button {
      background-color: #bec6f3 !important;
      color: #360000 !important;
    }
  }

  .v-text-field .v-label,
  .v-text-field .v-label--active {
    color: #bec6f3 !important;
  }

  .v-input__slot:before,
  .v-input__slot:after {
    border-color: #bec6f3 !important;
  }
  .v-input input,
  .v-input textarea {
    color: #bec6f3 !important;
  }
}
</style>
