import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      title: "Zachary Knuttila - Home",
      metaTags: [
        {
          name: "description",
          content: "",
        },
        {
          property: "og:description",
          content: "",
        },
        {
          property: "og:url",
          content: "https://zacharyjknuttila.com",
        },
        {
          property: "twitter:description",
          content: "",
        },
        {
          property: "twitter:url",
          content: "https://zacharyjknuttila.com",
        },
      ],
    },
  },
  {
    path: "/cv",
    name: "CurriculumVitae",
    component: () =>
      import(/* webpackChunkName: "cv" */ "../views/CurriculumVitae.vue"),
    meta: {
      title: "Zachary Knuttila - CV",
      metaTags: [
        {
          name: "description",
          content: "Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking.",
        },
        {
          property: "og:description",
          content: "Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking.",
        },
        {
          property: "og:url",
          content: "https://zacharyjknuttila.com/cv",
        },
        {
          property: "twitter:description",
          content: "Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking.",
        },
        {
          property: "twitter:url",
          content: "https://zacharyjknuttila.com/cv",
        },
      ],
    },
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue"),
    meta: {
      title: "Zachary Knuttila - Gallery",
      metaTags: [
        {
          name: "description",
          content: "Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking.",
        },
        {
          property: "og:description",
          content: "Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking.",
        },
        {
          property: "og:url",
          content: "https://zacharyjknuttila.com/gallery",
        },
        {
          property: "twitter:description",
          content: "Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking.",
        },
        {
          property: "twitter:url",
          content: "https://zacharyjknuttila.com/gallery",
        },
      ],
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? "Creative Reyne";

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  if (!to.meta.metaTags) return next();

  to.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
