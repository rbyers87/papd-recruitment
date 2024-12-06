import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function uploadImage(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export function getImagePath(filename: string): string {
  return `/images/${filename}`;
}

// Default paths for different image categories
export const IMAGE_PATHS = {
  patch: '/images/patch.png',
  hero: '/images/hero.jpg',
  divisions: '/images/divisions/',
  teams: '/images/teams/',
  gallery: '/images/gallery/'
};