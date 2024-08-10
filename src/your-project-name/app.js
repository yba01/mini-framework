import { Router } from "../core/router.js";
import HomeComponent from "./components/Home.js";


const router = new Router

router.registerRoute('/', HomeComponent)

router.navigateTo('/')

