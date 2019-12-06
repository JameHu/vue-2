module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'views': '@/views',
                'src': '@/assets',
                'network': '@/network',
                'common': '@/components/common',
                'content': '@/components/content',
            }
        }

    }
}