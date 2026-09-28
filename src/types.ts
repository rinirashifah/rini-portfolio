export interface SlideImage {
  url: string;
  caption?: string;
}

export interface ModalLink {
  label: string;
  url: string;
  icon?: string;
}

export interface CardItem {
  key: string;
  tags: { label: string; color: 'pink' | 'sky' | 'gold' | 'green' }[];
  name: string;
  org: string;
  period: string;
  desc: string;
  bullets: string[];
  images: SlideImage[];
  links: ModalLink[];
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
