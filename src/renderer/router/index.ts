import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
	history: createWebHistory(import.meta.url),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../components/HelloWorld.vue"),
			/* redirect: "/list",
			children: [{}], */
		},
	],
});

export default router;
