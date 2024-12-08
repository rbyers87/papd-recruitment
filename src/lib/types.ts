export interface Division {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  type: 'full-time' | 'part-time';
}

export interface Team {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  type: 'special' | 'support';
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}