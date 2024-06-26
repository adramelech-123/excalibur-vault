import { RequestHandler } from "express";
import { SignUpBody, LoginBody } from "../../@types/userauth.types";
import createHttpError from "http-errors";
import UserModel from "../models/user";
import bcrypt from "bcrypt";

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.session.userId).select("+email")
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


export const SignUp: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const passwordRaw = req.body.password;
        
        if (!username || !email || !passwordRaw) {
          throw createHttpError(400, "Parameters missing");
        }

        const existingUsername = await UserModel.findOne({
          username: username,
        }).exec();

        if (existingUsername) {
          throw createHttpError(
            409,
            "Username already taken. Please choose a different one or log in instead."
          );
        }

        const existingEmail = await UserModel.findOne({ email: email }).exec();

        if (existingEmail) {
          throw createHttpError(
            409,
            "A user with this email address already exists. Please log in instead."
          );
        }

        const passwordHashed = await bcrypt.hash(passwordRaw, 10);

        const newUser = await UserModel.create({
          username: username,
          email: email,
          password: passwordHashed,
        });

        req.session.userId = newUser._id;
        res.status(201).json(newUser);
    } catch (error) {
        next(error)
    }
}

export const Login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
 
    try {
        if(!username || !password) {
            throw createHttpError(401, "Missing login fields!")
        }

        const user = await UserModel.findOne({ username: username })
          .select("+password +email")
          .exec();

        if (!user) {
          throw createHttpError(401, "Invalid credentials!");
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if(!passwordMatch) {
            throw createHttpError(401, "Invalid Credentials!")
        }

        req.session.userId = user._id
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }

}

export const Logout: RequestHandler = (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    } else {
      res.sendStatus(200);
    }
  });
};