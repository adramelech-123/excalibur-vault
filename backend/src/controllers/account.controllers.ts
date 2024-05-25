import { RequestHandler } from "express";
import createHttpError from "http-errors";
import AccModel from "../models/account"


export const getAccount: RequestHandler = async (req, res, next) => {
    const authenticatedUserId = req.session.userId

    try {
        const accounts = await AccModel.findById({userId: authenticatedUserId})
        res.status(200).json(accounts)
    } catch (error) {
        next(error)
    }
}