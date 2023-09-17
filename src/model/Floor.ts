import { Schema, model } from 'mongoose';

import type { FloorSchemaType } from '../namespace/Floor';

const FloorSchema = new Schema(
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

const Floor = model<FloorSchemaType>('Floor', FloorSchema);

export default Floor;
