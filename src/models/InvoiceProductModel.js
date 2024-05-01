import mongoose from "mongoose";

const invoiceProductSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    invoiceID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "invoices",
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    salesPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default InvoiceProductModel = mongoose.model(
  "invoiceproducts",
  invoiceProductSchema
);
