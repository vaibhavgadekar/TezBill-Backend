export type StaffSchemaType = {
  name: string;
  mobile_number: string;
  password: string;
  TenantID: string;
  status: StaffStatusTypes;
  role: StaffRoleType;
};

export type StaffStatusTypes = {
  ACTIVE: 'ACTIVE';
  DEACTIVE: 'DEACTIVE';
};

export type StaffRoleType = {
  WAITER: 'WAITER';
  CHEF: 'CHEF';
  MANAGER: 'MANAGER';
  TANDOOR: 'TANDOOR';
};
