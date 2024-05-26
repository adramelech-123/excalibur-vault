import { InferSchemaType, Schema, model } from "mongoose";

const accountSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    acc_type: {
      type: String,
      required: true,
      enum: ["password_accounts", "payment_cards"],
    },
    acc_title: { type: String, required: true },
    acc_email: { type: String },
    acc_username: { type: String },
    acc_password: { type: String },
    acc_url: { type: String },
    acc_image: { type: String },
    acc_notes: { type: String },
    acc_card_number: {
      type: String,
      validate: {
        validator: function (this: any) {
          if (this.acc_type === "payment_cards") {
            console.log(!!this.acc_card_number)
            return !!this.acc_card_number;
          }

          return true
        },
        message: "acc_card_number is required for payment_cards type!",
      },
    },
    acc_card_cvc: {
      type: String,
      validate: {
        validator: function (this: any) {
          if (this.acc_type === "payment_cards") {
            return !!this.acc_card_cvc;
          }
          return true; // This allows other types to pass validation
        },
        message: "acc_cvc is required for payment_cards type!",
      },
    }  
  },
  { timestamps: true }
);

type Account = InferSchemaType<typeof accountSchema> 

export default model<Account>("Account", accountSchema)