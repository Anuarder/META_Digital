import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";

const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const Philosophy = () => import("./views/Philosophy.vue");
const Projects = () => import("./views/Projects.vue");
const Team = () => import("./views/Team.vue");
const Contact = () => import("./views/Contact.vue");

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			redirect: "/home",
			component: App,
			children: [
				{
					path: "/home",
					name: "home",
					component: Home
				},
				{
					path: "/about",
					name: "about",
					component: About
				},
				{
					path: "/philosophy",
					name: "philosophy",
					component: Philosophy
				},
				{
					path: "/projects",
					name: "projects",
					component: Projects
				},
				{
					path: "/team",
					name: "team",
					component: Team
				},
				{
					path: "/contact",
					name: "contact",
					component: Contact
				}
			]
		}
	]
});
