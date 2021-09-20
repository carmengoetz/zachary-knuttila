<template>
  <v-container>
    <v-row class="ml-lg-n16"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-card-title> Zachary Knuttila </v-card-title>
      </router-link></v-row
    >
    <v-row class="mt-n8">
      <v-col>
        <v-row class="my-16">
          <v-dialog v-model="dialog" width="750">
            <template v-slot:activator="{ on, attrs }">
              <div class="box1 mx-auto" v-bind="attrs" v-on="on" />
            </template>
            <v-card>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn fab text @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-actions>
              <div class="box1__large mx-auto" />
            </v-card>
          </v-dialog>
        </v-row>
        <v-row class="my-16">
          <div class="box2 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box1 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box2 mx-auto" />
        </v-row>
      </v-col>
      <v-col>
        <v-row class="my-16">
          <v-dialog v-model="dialog2" width="750">
            <template v-slot:activator="{ on, attrs }">
              <div class="box2 mx-auto" v-bind="attrs" v-on="on" />
            </template>
            <v-card>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn fab text @click="dialog2 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-actions>
              <div class="box2__large mx-auto" />
            </v-card>
          </v-dialog>
        </v-row>
        <v-row class="my-16">
          <div class="box1 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box2 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box1 mx-auto" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
  data: () => ({
    dialog: false,
    dialog2: false,
  }),
};
</script>

<style lang="scss" scoped>
.box1 {
  width: 500px;
  height: 600px;

  &__large {
    width: 750;
    height: 900px;
    @media (prefers-color-scheme: dark) {
      background-color: #bec6f3;
    }
    @media (prefers-color-scheme: light) {
      background-color: #360000;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #bec6f3;
  }
  @media (prefers-color-scheme: light) {
    background-color: #360000;
  }
}

.box2 {
  width: 500px;
  height: 400px;

  &__large {
    width: 750;
    height: 600px;
    @media (prefers-color-scheme: dark) {
      background-color: #bec6f3;
    }
    @media (prefers-color-scheme: light) {
      background-color: #360000;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #bec6f3;
  }
  @media (prefers-color-scheme: light) {
    background-color: #360000;
  }
}
</style>
