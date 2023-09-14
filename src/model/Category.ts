import { Schema, model } from 'mongoose';

import type { CategorySchemaType } from '../namespace/Category';

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    TenantID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Category = model<CategorySchemaType>('Category', CategorySchema);

export default Category;
