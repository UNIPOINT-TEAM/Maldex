export interface Catalog {
  id: number;
  name: string;
  article: string;
  price: string;
  price_type: string;
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
  data?: {
    name: string;
    price: string;
    circulation: string;
    total: string;
    description: string;
    characteristics: {
      vendor_code: string;
      size: string;
      material: string;
      width: string;
      available_application: string;
    };
    image: string;
    image2?: string;
  };
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
