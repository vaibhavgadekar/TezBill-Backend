import { Schema, model } from 'mongoose';

import type { StaffSchemaType } from '../namespace/Staff';

const StaffSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'ACTIVE',
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

const Staff = model<StaffSchemaType>('Staff', StaffSchema);

export default Staff;
