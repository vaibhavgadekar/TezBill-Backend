export type TableSchemaType = {
  name: string;
  TenantID: string;
  floor_id: string;
  status: 'AVAILABLE' | 'RESERVED' | 'CLOSED';
};
