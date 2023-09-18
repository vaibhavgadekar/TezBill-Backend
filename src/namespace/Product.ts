import type { CategorySchemaType } from './Category';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Products {
  export interface Menu {
    name: string;
    type: MenuType;
    category: CategorySchemaType[];
    image: string;
    price: number;
    stock: number;
    TenantID: string;
    availability: Status;
  }

  export enum MenuType {
    VEG = 'VEG',
    NON_VEG = 'NON_VEG',
    EGG = 'EGG',
  }

  export enum Status {
    ACTIVE = 'ACTIVE',
    DEACTIVE = 'DEACTIVE',
  }
}
