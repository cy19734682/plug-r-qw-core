import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./examples', import.meta.url)),
			'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
		}
	},
	server: {
		proxy: {
			'/node-serve': {
				target: 'http://localhost:7890/',
				changeOrigin: true,
				rewrite: (path: any) => path.replace(/^\/node-serve/, '')
			}
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				rewriteUrls: 'all'
			}
		}
	},
	assetsInclude: ['**/*.md'],
	define: {},
	build: {
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'plugRQw',
			fileName: 'plugRQw'
		},
		rollupOptions: {
			external: [
				'@jiaminghi/data-view',
				'@wangeditor/editor',
				'@wangeditor/editor-for-vue',
				'ar-cascader',
				'axios',
				'deepmerge',
				'echarts',
				'js-cookie',
				'lodash',
				'moment',
				'pinia',
				'sweetalert',
				'view-ui-plus',
				'vue',
				'vue-amap',
				'vue-i18n',
				'vue-json-viewer',
				'vue-router',
				'xss',
				'china-map-data'
			],
			output: {
				dir: './lib',
				globals: {
					vue: 'Vue',
					axios: 'axios',
					'view-ui-plus': 'ViewUIPlus',
					deepmerge: 'deepmerge',
					'js-cookie': 'Cookies',
					lodash: '_',
					sweetalert: 'swal',
					'vue-amap': 'VueAMap',
					'vue-i18n': 'VueI18n',
					'vue-json-viewer': 'JsonView',
					'vue-router': 'VueRouter'
				}
			}
		},
		copyPublicDir: false
	}
})
