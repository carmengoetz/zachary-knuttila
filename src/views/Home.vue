<template>
  <Main
    :imgDark="require('@/assets/DarkModeLeft.gif')"
    :lazyDark="require('@/assets/DarkModeLeft-low.gif')"
    :imgLight="require('@/assets/LightModeLeft.gif')"
    :lazyLight="require('@/assets/LightModeLeft-low.gif')"
    title="Last Home of the Lemurians ‐ Habitat 1"
    medium="Digital, 2021"
  >
    <div class="mx-0 mx-md-4">
      <p class="home home--large">
        Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital
        work and traditional printmaking. Their work is created as an extension of a
        personal exploration of spirituality and is largely built around a search for
        reality beyond our perception. By using digital interfaces to create a framework
        within which the computer creates its own imagery Zachary feels that the direct
        human impulse or intention can be removed from the work allowing a brief glimpse
        into the reality above our own, in line with gnostic philosophy.
      </p>

      <p class="home home--small font-italic">
        "The Last Home of the Lemurians by Zachary Knuttila is an installation inside this
        virtual exhibition that utilizes a mathematically generated 3D object to distort
        and abstract the view of a photograph placed directly behind it. A piece such as
        this showcases the possibility of a virtual installation, implementing a purely
        digital technique and presentation, while conceptually speaking to distorted
        points of view, one of which our world has at times recently felt as if it has
        been subjected to."
      </p>

      <p class="home home--large ml-8">
        Kyle Zurvinski, 2020<br /><a href="https://biofeedbackcollective.com/"
          >Biofeedback Collective</a
        >
      </p>
    </div>
  </Main>
</template>

<script>
import Main from "../components/Main.vue";

export default {
  name: "Home",

  components: {
    Main,
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-family: "Raleway", sans-serif;
  font-weight: 600;

  &--large {
    font-size: 20px;
  }

  &--small {
    font-size: 16px;
    font-weight: 400;
  }
}

a {
  color: #360000 !important;
  @media (prefers-color-scheme: dark) {
    color: #bec6f3 !important;
  }
}
</style>
