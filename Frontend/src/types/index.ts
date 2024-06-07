export interface Catalog {
  id: number;
  name: string;
  article: string;
  price: string;
  price_type: string;
  werehouse: {
    name: string;
    quantity: number;
  }[];
  images_set: {
    image_url: string;
    image: string;
  }[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  circulation: number;
  total: string;
  image: string;
  is_new: boolean;
  is_hit: boolean;
  discount_price: number;
  price_type: string;
  sizes?: {
    name: string;
    quantity: number;
  }[];
  images_set: {
    id: number;
    image_url: string;
    image: string;
  }[];
  characteristics: {
    vendor_code: string;
    size: string;
    material: string;
    width: string;
    available_application: string;
  };
  description: string;
}

export interface Template {
  id: number;
  name: string;
  template: string;
  preview: string;
  thumbnail: string;
}

export interface TemplateData {
  data?: Product;
  background?: {
    color: string;
    image: string;

    currentSlide: boolean;
    allSlider: boolean;
  };
  applying?: {
    image: string;
  };
}
