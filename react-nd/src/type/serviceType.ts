export type ServerCategory = {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
};

export type ServiceType = {
  id: string;
  name: string;
  icon?: string;
  color?: string;
};

export const mapService = (serverCategory: ServerCategory): ServiceType => ({
  id: serverCategory.id,
  name: serverCategory.name,
  icon: serverCategory.icon,
  color: serverCategory.color,
});
