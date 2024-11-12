export type BusinessType = {
  name: string;
  logo: string;
};

export type BusinessesType = {
  [category: string]: BusinessType[];
};
