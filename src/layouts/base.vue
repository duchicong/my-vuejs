<template>
  <header class="h-12 w-full text-xl mb-8">
    <container class="container">
      <slot name="header"></slot>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </container>
  </header>
  
  <main class="block">
    <container class="bg-yellow h-20 w-full text-xl">
      <component :is="layout">
        <RouterView />
      </component>
    </container>
  </main>
  <footer class="block">
    <container>
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
        <slot />
        <p>Copy right {{ new Date().getUTCFullYear() }}</p>
      </div>
    </container>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: block;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Container from '@/components/Container/default.container.vue';

export default defineComponent({
  name: 'base-layout',
  setup() {
      const route = useRoute();
      /**
       *  This is a computed property that will return the name
       *  of the current route
       */
      const layout = computed(() => {
          const layout = route?.meta?.layout;

          if (layout) {
              return `The${layout}Layout`;
          }
          return 'div';
      });
      return {
          layout,
      };
  },
  components: {
    Container
  }
})
</script>