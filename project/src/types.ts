export type BookingType = 'darshan' | 'seva' | 'accommodation' | 'prasad' | 'parking';

export interface BookingData {
  type: BookingType;
  date: string;
  time?: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
  specialRequests?: string;
}

export interface TempleInfo {
  id: string;
  name: string;
  deity: string;
  timings: string;
  description: string;
  image: string;
  location: string;
}

export interface SevaOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  available: boolean;
}

export interface DarshanSlot {
  id: string;
  time: string;
  available: number;
  total: number;
}

export const languages = {
  en: 'English',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  kn: 'ಕನ್ನಡ'
};