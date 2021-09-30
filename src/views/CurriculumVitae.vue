<template>
  <Main>
    <div class="cv--text mx-auto px-2 px-md-0 mx-0 mx-md-4">
      <div class="cv--text text-body-1 mb-4">August 2021 Nuit Blanche Regina</div>
      <div class="cv--text text-body-1">May 2021 Nuit Blanche YXE’s</div>
      <div class="cv--text text-caption mb-4">Winter's End</div>
      <div class="cv--text text-body-1">December 2020 Biofeedback’s Virtual Gallery</div>
      <div class="cv--text text-caption mb-4">
        as part of group exhibition Pending Install
      </div>
      <div class="cv--text text-body-1">August 2018 Snelgrove Gallery</div>
      <div class="cv--text text-caption mb-4">as part of group exhibition Boom</div>
      <div class="cv--text text-body-1">July 2018 Flint Saloon</div>
      <div class="cv--text text-caption mb-4">
        as part of group exhibition Night; Neon Dreams
      </div>
      <div class="cv--text text-body-1">June 2018 Snelgrove Gallery</div>
      <div class="cv--text text-caption mb-4">
        as part of group exhibition Full-Stack/Half-Stack/Night/Of-Motion
      </div>
      <div class="cv--text text-body-1">December 2017 The Mint Skateboarding</div>
      <div class="cv--text text-caption mb-4">
        as part of group exhibition 外国人の少年
      </div>
      <div class="cv--text text-body-1">Study Under:</div>
      <div class="cv--text text-body-1">Jakob Semko</div>
      <div class="cv--text text-body-1">Robyn Anderson</div>
      <div class="cv--text text-body-1">Patti Shiplett</div>
    </div>
  </Main>
</template>

<script>
import Main from "../components/Main.vue";

export default {
  name: "CurriculumVitae",

  components: {
    Main,
  },
};
</script>

<style lang="scss" scoped>
.cv {
  &--text {
    font-family: "Raleway", sans-serif !important;
    font-weight: 600;
  }
}
</style>
