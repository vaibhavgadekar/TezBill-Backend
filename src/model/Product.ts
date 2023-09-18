import { Schema, model } from 'mongoose';

import { Products } from '../namespace/Product';

const ProductSchema = new Schema<Products.Menu>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: Products.MenuType.VEG,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    TenantID: {
      type: String,
      required: true,
    },
    category: {
      type: [],
      required: true,
    },
    variants: {
      type: [],
    },
    addons: {
      type: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Product = model<Products.Menu>('Product', ProductSchema);

export default Product;
