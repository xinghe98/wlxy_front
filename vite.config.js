import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
const Path = require("path");
/**
 * https://vitejs.dev/config
 */
const config = defineConfig({
	root: Path.join(__dirname, "src", "renderer"),
	publicDir: "public",
	server: {
		port: 8080,
	},
	open: false,
	build: {
		outDir: Path.join(__dirname, "build", "renderer"),
		emptyOutDir: true,
	},
	plugins: [
		vue(),
		AutoImport({
			imports: [
				"vue",
				{
					"naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
				},
			],
		}),
		Components({
			resolvers: [NaiveUiResolver()],
		}),
	],
});

module.exports = config;
