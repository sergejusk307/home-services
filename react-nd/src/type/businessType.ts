export type ServerBusiness = {
  id: string;
  name: string;
  categoryId: string;
  logo?: string;
};

export type BusinessType = {
  id: string;
  name: string;
  icon?: string;
  color?: string;
};

export const mapBusiness = (serverBusiness: ServerBusiness): BusinessType => ({
  id: serverBusiness.id,
  name: serverBusiness.name,
  icon: serverBusiness.logo,
});
