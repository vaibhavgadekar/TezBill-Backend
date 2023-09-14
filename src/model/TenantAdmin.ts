import { Schema, model } from 'mongoose';

import type { TenantType } from '../namespace/Tenant';

const TenantAdminSchema = new Schema(
  {
    entity_name: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
    },
    contact: {
      type: Object,
    },
    subscription: {
      type: Object,
    },
    settings: {
      type: Object,
    },
    otp: {
      type: Number,
    },
    role: {
      type: String,
      default: 'L1',
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const TenantAdmin = model<TenantType>('TenantAdmin', TenantAdminSchema);

export default TenantAdmin;
