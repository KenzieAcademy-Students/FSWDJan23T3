import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/auth.config";

export async function signUp(req, res, next) {
  const { username, password } = req.body;

  try {
    /**
     * Step 1: Ensure the username is not already taken.
     */
    const user = await User.findOne({ username: username.toLowerCase() });

    if (user) {
      return res.status(422).json({ username: "Username already in use." });
    }

    /**
     * Step 2: Encrypt the password using bcryptjs
     */
    const passwordHash = bcrypt.hashSync(password, 12);

    /**
     * Step 3: Create the User
     */
    await User.create({ username: username.toLowerCase(), passwordHash });

    res.sendStatus(201);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function signIn(req, res, next) {
  const { username, password } = req.body;

  try {
    /**
     * Step 1: Ensure the username is in use
     */
    const user = await User.findOne({ username: username.toLowerCase() });

    if (!user) {
      return res
        .status(422)
        .json({ username: "Username and/or password is invalid." });
    }

    /**
     * Step 2: Compare the provided password to the encrypted password
     * already in the database using bcrypt.
     */
    const passwordIsValid = bcrypt.compareSync(password, user.passwordHash);

    if (!passwordIsValid) {
      return res
        .status(422)
        .json({ username: "Username and/or password is invalid." });
    }

    /**
     * Step 3: Using the user's credentials, create a JSON Web Token
     */
    const tokenPayload = {
      sub: user.id,
      uname: user.username,
      role: user.role,
    };
    const accessToken = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      token: accessToken,
      user: {
        sub: user.id,
        uname: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
