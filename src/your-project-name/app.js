import { Router } from "../core/router.js";
import HomeComponent from "./components/Home.js";
import TeamComponent from "./components/Team.js";


export const router = new Router

router.registerRoute('/', HomeComponent)
router.registerRoute('/team', TeamComponent)

router.navigateTo('/')