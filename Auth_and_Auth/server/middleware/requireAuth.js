import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/auth.config";
import User from "../models/user.model";

export function requireAuth(requiredRole = 1) {
  return (req, res, next) => {
    /**
     * Step 1: Check the Authorization header
     */
    const auth = req.get("authorization");

    if (!auth) {
      return res.sendStatus(401);
    }

    /**
     * Step 2: Extract the token
     */
    const token = auth.replace("Bearer ", "");

    /**
     * Step 3: Verify the token
     */
    jwt.verify(token, JWT_SECRET, (error, payload) => {
      if (error) {
        console.log(error);
        return res.sendStatus(401);
      }

      /**
       * Step 4: Check the roles match
       */
      if (requiredRole > payload.role) {
        return res.sendStatus(401);
      }

      /**
       * Step 5: If the roles do match, let's get the user
       * from the database and attach it to the request.
       */
      User.findOne({ _id: payload.sub, username: payload.uname })
        .then((user) => {
          if (!user) {
            return res.sendStatus(401);
          }
          req.user = user;
          next();
        })
        .catch((err) => res.sendStatus(500));
    });
  };
}
