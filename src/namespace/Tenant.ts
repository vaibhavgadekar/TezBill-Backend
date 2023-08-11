export type TenantType = {
  name: string;
  created_at: string;
  updated_at: string;
  address: TenantAddressType;
  contact: TenantContactType;
  subscription: SubscriptionType;
  status: TenantStatus;
  settings: {
    timezone: 'UTC';
    currency: 'INR';
  };
};

export enum SubscriptionPlanType {
  SILVER = 'SILVER',
  GOLD = 'GOLD',
}

export enum SubscriptionPeriod {
  ONE_YEAR = 'ONE_YEAR',
  TWO_YEAR = 'TWO_YEAR',
}

export type TenantAddressType = {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
};

export type TenantContactType = {
  name: string;
  email: string;
  phone: string;
};

export type SubscriptionType = {
  plan: SubscriptionPlanType;
  period_type: SubscriptionPeriod;
  start_date: string;
  end_date: string;
};

export enum TenantStatus {
  Active = 'Active',
  WaitingForPayment = 'Waiting for Payment',
  Inactive = 'Inactive',
  Suspended = 'Suspended',
  PendingApproval = 'Pending Approval',
  Expired = 'Expired',
  Cancelled = 'Cancelled',
  PendingActivation = 'Pending Activation',
  UnderReview = 'Under Review',
  Rejected = 'Rejected',
  OnHold = 'On Hold',
}
