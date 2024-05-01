import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    storeID: {
      type: String,
      required: true,
    },
    storePassword: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    successUrl: {
      type: String,
      required: true,
    },
    failUrl: {
      type: String,
      required: true,
    },
    cancelUrl: {
      type: String,
      required: true,
    },
    ipnUrl: {
      type: String,
      required: true,
    },
    initUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default PaymentModel = mongoose.model("payments", paymentSchema);
