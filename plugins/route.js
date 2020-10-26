export default ({ app }) => {
  app.router.afterEach((to, from) => {
    if (app.i18n.locale === 'ar') {
      app.head.htmlAttrs.dir = 'rtl'
    } else if (app.i18n.locale === 'en') {
      app.head.htmlAttrs.dir = 'ltr'
    }
  })
}
