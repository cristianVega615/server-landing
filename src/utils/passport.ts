import User from "../models/User";
import { User as TypeUser } from "../interface/schema";
import { Strategy } from "passport-local";

let localStratey = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function ( email, password, done) {
      
      try {
        let user: User | null = await User.findOne(
        { email });
    
        if (!user) {
            return done(null, false);
        }
        if (!user?.verifyPassword(password, user.password)) {
            return done(null, false);
        }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

export { localStratey };
