<template>
  <Main
    :imgDark="require('@/assets/DarkModeRight.gif')"
    :lazyDark="require('@/assets/DarkModeRight-low.gif')"
    :imgLight="require('@/assets/LightModeRight.gif')"
    :lazyLight="require('@/assets/LightModeRight-low.gif')"
    title="Last Home of the Lemurians ‐ Habitat 2"
    medium="Digital, 2021"
  >
    <div class="cv__text mx-0 mx-md-4">
      <p class="cv__text--large">August 2021 Nuit Blanche Regina</p>
      <p class="cv__text--large">
        May 2021 Nuit Blanche YXE’s<br />
        <span class="cv__text--small text-caption mb-4">Winter's End</span>
      </p>
      <p class="cv__text--large">
        December 2020 Biofeedback’s Virtual Gallery<br />
        <span class="cv__text--small text-caption mb-4">
          as part of group exhibition Pending Install</span
        >
      </p>
      <p class="cv__text--large">
        August 2018 Snelgrove Gallery<br />
        <span class="cv__text--small text-caption mb-4">
          as part of group exhibition Boom</span
        >
      </p>
      <p class="cv__text--large">
        July 2018 Flint Saloon<br />
        <span class="cv__text--small text-caption mb-4">
          as part of group exhibition Night; Neon Dreams</span
        >
      </p>
      <p class="cv__text--large">
        June 2018 Snelgrove Gallery<br />
        <span class="cv__text--small text-caption mb-4">
          as part of group exhibition Full-Stack/Half-Stack/Night/Of-Motion</span
        >
      </p>
      <p class="cv__text--large">
        December 2017 The Mint Skateboarding<br />
        <span class="cv__text--small text-caption mb-4">
          as part of group exhibition 外国人の少年</span
        >
      </p>
      <p class="cv__text--large">
        Study Under:<br />
        Jakob Semko<br />
        Robyn Anderson<br />
        Patti Shiplett
      </p>
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
  &__text {
    font-family: "Raleway", sans-serif !important;
    font-weight: 600;

    &--large {
      font-size: 20px;
    }

    &--small {
      font-size: 16px !important;
    }
  }
}
</style>
