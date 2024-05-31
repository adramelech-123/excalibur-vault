import { RequestHandler } from "express";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import AccModel from "../models/account";
import {
  createAccBody,
  updateAccBody,
  updateAccParams,
} from "../../@types/account.types";

export const getAllAccounts: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;

  try {
    const accounts = await AccModel.find({ userId: authenticatedUserId });
    res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
};

export const getAccount: RequestHandler = async (req, res, next) => {
  const accountId = req.params.accId;
  const authenticatedUserId = req.session.userId;

  try {
    if (!mongoose.isValidObjectId(accountId)) {
      throw createHttpError(400, "Invalid account ID");
    }

    const account = await AccModel.findById(accountId).exec();

    if (!account) {
      throw createHttpError(404, "Account not found!");
    }

    if (!account.userId.equals(authenticatedUserId)) {
      console.log(
        `AuthenticatedUserID: ${authenticatedUserId}, AccountUserID: ${account?.userId}`
      );
      throw createHttpError(
        401,
        "This user is not Authorised to access this account"
      );
    }

    res.status(200).json(account);
  } catch (error) {
    next(error);
  }
};

export const createAccount: RequestHandler<
  unknown,
  unknown,
  createAccBody,
  unknown
> = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;

  const title = req.body.acc_title;
  const accType = req.body.acc_type;
  const email = req.body.acc_email;
  const username = req.body.acc_username;
  const password = req.body.acc_password;
  const url = req.body.acc_url;
  const image = req.body.acc_image;
  const notes = req.body.acc_notes;
  const card_number = req.body.acc_card_number;
  const card_cvc = req.body.acc_card_cvc;

  try {
    if (!title) {
      throw createHttpError(400, "Account must have a title!");
    }

    const newAccount = await AccModel.create({
      userId: authenticatedUserId,
      acc_title: title,
      acc_type: accType,
      acc_email: email,
      acc_username: username,
      acc_password: password,
      acc_url: url,
      acc_image: image,
      acc_notes: notes,
      acc_card_number: card_number,
      acc_card_cvc: card_cvc,
    });

    res.status(201).json(newAccount);
  } catch (error) {
    next(error);
  }
};

export const updateAccount: RequestHandler<
  updateAccParams,
  unknown,
  updateAccBody,
  unknown
> = async (req, res, next) => {
  const accId = req.params.accId;
  const authenticatedUserId = req.session.userId;

  const title = req.body.acc_title;

  const email = req.body.acc_email;
  const username = req.body.acc_username;
  const password = req.body.acc_password;
  const url = req.body.acc_url;
  const image = req.body.acc_image;
  const notes = req.body.acc_notes;
  const card_number = req.body.acc_card_number;
  const card_cvc = req.body.acc_card_cvc;

  try {
    if (!mongoose.isValidObjectId(accId)) {
      throw createHttpError(400, "Invalid Account ID!");
    }

    if (!title) {
      throw createHttpError(400, "Note must have a title!");
    }

    const account = await AccModel.findById(accId).exec();

    if (!account) {
      throw createHttpError(404, "Account not found!");
    }

    if (!account.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You cannot access this account!");
    }

    account.acc_title = title;
    account.acc_email = email;
    account.acc_username = username;
    account.acc_password = password;
    account.acc_url = url;
    account.acc_image = image;
    account.acc_notes = notes;
    account.acc_card_number = card_number;
    account.acc_card_cvc = card_cvc;

    const updatedAccount = await account.save();

    res.status(201).json(updatedAccount);
  } catch (error) {
    next(error);
  }
};
