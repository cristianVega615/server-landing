import User from "../models/User";
import { User as TypeUser } from "../interface/schema";
import { Strategy } from "passport-local";

let localStratey = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    let user: User | null = await User.findOne({ email });

    let condition = await user?.verifyPassword(password, user.password);
    try {
      if (!user) {
        return done(null, false);
      }
      if (!condition) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

export { localStratey };
