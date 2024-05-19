import { Router } from 'express';
import {userModel} from '../../DB/model/user.model.js'
import { auth } from '../../midleware/auth.js';
import { getInfo, updatePassword } from "./controller/user.controller.js";
import { validation } from "../../midleware/validation.js";
import {updatePasswordSchema} from './user.validation.js'
const router = Router();

router.get("/", auth(), getInfo)
router.patch("/updatePassword", auth(), validation(updatePasswordSchema), updatePassword);

export  default router