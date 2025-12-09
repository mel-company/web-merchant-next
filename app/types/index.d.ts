export type ProductType = {
  id: string;
  name: string;
  price: number;
  photos: PhotoType[];
};

export type PhotoType = {
  url: string;
};
