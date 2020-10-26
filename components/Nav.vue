<template>
  <div>
    <b-navbar type="light" variant="white" class="shadow-sm">
      <b-navbar-brand to="/">
        <img src="~/static/logo.png" alt="Logo" class="logo" />
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="rounded-pill lang"
            variant="primary"
            >{{ locale.name }}</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
<style scoped>
.logo {
  width: 150px;
}
.lang {
  padding: 0.35rem;
  line-height: normal;
  font-size: 16px;
  box-shadow: rgba(70, 104, 167, 0.5) 0px 0px 0px 0.2rem;
}
</style>
