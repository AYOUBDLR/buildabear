export interface DiscountConfig {
  storeName: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number; // e.g. 40 for 40% or 50 for $50
  discountHeadline: string;
  initialSeconds: number;
  promoCode: string;
  freeShipping: boolean;
}

export interface ClaimEvent {
  id: string;
  name: string;
  city: string;
  discount: string;
  timeAgo: string;
}
