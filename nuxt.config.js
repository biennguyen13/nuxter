export default {
    css: [
        '~/assets/main.scss'
    ],
    loading: '~/components/LoadingBar.vue',
    router: {
        linkActiveClass: 'my-custom-active-link',
        linkExactActiveClass: 'my-custom-exact-active-link'
    },
    target: 'server',// default is 'server',
    plugins: ['@/plugins/bootstrap-vue'],
    components: true
}
