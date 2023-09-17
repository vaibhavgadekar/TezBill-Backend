import { Schema, model } from 'mongoose';

import type { TableSchemaType } from '../namespace/Table';

const TableSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    TenantID: {
      type: String,
      required: true,
    },
    floor: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: 'AVAILABLE',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Table = model<TableSchemaType>('Table', TableSchema);

export default Table;
