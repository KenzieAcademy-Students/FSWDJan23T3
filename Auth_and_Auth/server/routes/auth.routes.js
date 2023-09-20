import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import validateSignUp from "../middleware/validateSignUp";
import validateSignIn from "../middleware/validateSignIn";

const authRoutes = Router();

authRoutes.post("/signup", validateSignUp, signUp);
authRoutes.post("/signin", validateSignIn, signIn);

export default authRoutes;
