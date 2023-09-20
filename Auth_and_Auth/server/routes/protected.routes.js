import { Router } from "express";
import {
  basicProtectedRoute,
  roleProtectedRoute,
} from "../controllers/protected.controller";
import { requireAuth } from "../middleware/requireAuth";

const protectedRoutes = Router();

protectedRoutes.get("/", requireAuth(), basicProtectedRoute);
protectedRoutes.get("/role", requireAuth(2), roleProtectedRoute);

export default protectedRoutes;
