import mongoose from "mongoose";

const invoiceSchema = monoose.Schema(
  {
    total: {
      type: Number,
      required: true,
    },
    vat: {
      type: Number,
      required: true,
    },
    payable: {
      type: Number,
      required: true,
    },
    cusDetails: {
      type: String,
      required: true,
    },
    shipDetails: {
      type: String,
      required: true,
    },
    tranID: {
      type: String,
      required: true,
    },
    deliveryStatus: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default InvoiceModel = mongoose.model("invoices", invoiceSchema);
