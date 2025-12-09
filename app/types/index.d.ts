export type ProductType = {
  id: string;
  name: string;
  price: number;
  photos: PhotoType[];
  category: CategoryType;
  thumbnail: PhotoType;
  description: string;
};

export type PhotoType = {
  url: string;
};

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
};
