import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		// VueDevTools(),
		AutoImport({
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/ // .md
			],

			// global imports to register
			imports: [
				// presets
				'vue',
				'vue-router',
				'vue-i18n',
				'pinia', // custom
				{
					'@vueuse/core': [
						// named imports
						'useMouse', // import { useMouse } from '@vueuse/core',
						// alias
						['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
					],
					axios: [
						// default imports
						['default', 'axios'] // import { default as axios } from 'axios',
					]
					/*'[package-name]': [
					 '[import-names]',
					 // alias
					 ['[from]', '[alias]'],
					 ],*/
				}, // example type import
				{
					from: 'vue-router',
					imports: ['RouteLocationRaw'],
					type: true
				}
			], // Enable auto import by filename for default module exports under directories
			defaultExportByFilename: false,

			// Auto import for module exports under directories
			// by default it only scan one level of modules under the directory
			dirs: [
				// './hooks',
				// './composables' // only root modules
				// './composables/**', // all nested modules
				// ...
			],

			// Filepath to generate corresponding .d.ts file.
			// Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
			// Set `false` to disable.
			dts: './src/auto-imports.d.ts',

			// Auto import inside Vue template
			// see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
			vueTemplate: false,

			// Custom resolvers, compatible with `unplugin-vue-components`
			// see https://github.com/antfu/unplugin-auto-import/pull/23/
			resolvers: [],

			// Inject the imports at the end of other imports
			injectAtEnd: true
		})
	],
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
				rewriteUrls: 'all',
				math: 'always'
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
				'@amap/amap-jsapi-loader',
				'@wangeditor/editor',
				'@wangeditor/editor-for-vue',
				'ar-cascader',
				'axios',
				'deepmerge',
				'echarts',
				'js-cookie',
				'lodash-es',
				'moment',
				'pinia',
				'popper.js',
				'sweetalert',
				'view-ui-plus',
				'vue',
				'vue-i18n',
				'vue-json-viewer',
				'vue-router',
				'china-map-data'
			],
			output: {
				dir: './lib',
				exports: 'named',
				globals: {
					'@amap/amap-jsapi-loader': 'AMapLoader',
					'@wangeditor/editor': 'wangEditor',
					'@wangeditor/editor-for-vue': 'WangEditorForVue',
					'ar-cascader': 'ArCascader',
					vue: 'Vue',
					axios: 'axios',
					'view-ui-plus': 'ViewUIPlus',
					deepmerge: 'deepmerge',
					'js-cookie': 'Cookies',
					'lodash-es': 'lodash',
					moment: 'moment',
					sweetalert: 'swal',
					'vue-i18n': 'VueI18n',
					'vue-json-viewer': 'JsonView',
					'vue-router': 'VueRouter'
				}
			}
		},
		copyPublicDir: false
	}
})
