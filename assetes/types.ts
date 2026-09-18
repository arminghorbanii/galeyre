export interface Product {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  price: number;
  discountPrice?: number | null;
  master: string;
  description: string;
  stock: number;
  sku: string;
  active: boolean;
  badges: string[];
  specs?: string;
  imageUrl?: string;
  imagePrompt?: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface Order {
  id: string;
  customer: string;
  phone: string;
  province: string;
  postal: string;
  address: string;
  date: string;
  amount: number;
  paymentStatus: 'پرداخت موفق' | 'در انتظار پرداخت' | 'لغو شده';
  fulfillmentStatus: 'در حال آماده‌سازی' | 'ارسال شد' | 'تحویل داده شد';
  payMethod?: string;
  items: {
    id?: string;
    title: string;
    price: number;
    qty: number;
    sku: string;
  }[];
}

export interface Category {
  title: string;
  slug: string;
  count: number;
  order: number;
}

export interface StoreSettings {
  storeName: string;
  phone: string;
  deliveryCost: number;
  freeThreshold: number;
  heroTitle: string;
  heroSubtitle: string;
  noticeBar: string;
}
