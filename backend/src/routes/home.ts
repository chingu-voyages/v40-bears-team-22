import { Router } from "express";
import {getIndex} from "../controllers/home";

const router = Router();
router.get('/', getIndex);



export default router;