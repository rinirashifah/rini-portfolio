export interface SlideImage {
  url: string;
  caption?: string;
}

export interface ModalLink {
  label: string;
  url: string;
  icon?: string;
}

export interface CardWidgetData {
  topPillLeft: string;
  topPillRight: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'green' | 'red' | 'purple' | 'blue';
  subline1?: string;
  tag1?: string;
  metaLeft?: string;
  metaRight?: string;
  version?: string;
}

export interface CardItem {
  key: string;
  tags: { label: string; color: 'pink' | 'sky' | 'gold' | 'green' | 'gray' }[];
  name: string;
  org: string;
  period: string;
  category?: 'Mobile (Flutter)' | 'Fullstack & Web' | 'Data Science & AI' | 'IoT & Embedded' | string;
  desc: string;
  bullets: string[];
  images: SlideImage[];
  links: ModalLink[];
  highlights?: string[];
  widget?: CardWidgetData;
  wide?: boolean;
}

export interface CertItem {
  key: string;
  title: string;
  issuer?: string;
  /** Path di folder public, contoh: '/certs/ds.jpg' atau '/certs/excel.pdf' */
  image?: string;
  pdf?: string;
  /** Link verifikasi / PDF (Drive, Credly, dll.) */
  link?: string;
}
