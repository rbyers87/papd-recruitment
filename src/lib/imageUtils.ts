import { supabase } from './supabase';

export async function uploadImage(file: File, path: string): Promise<string> {
  const { data, error } = await supabase.storage
    .from('images')
    .upload(path, file);

  if (error) {
    throw error;
  }

  const { data: publicUrl } = supabase.storage
    .from('images')
    .getPublicUrl(data.path);

  return publicUrl.publicUrl;
}

export function getImagePath(filename: string): string {
  if (filename.startsWith('http')) {
    return filename;
  }
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(filename);
  
  return data.publicUrl;
}

export const IMAGE_PATHS = {
  patch: '/images/patch.png',
  hero: '/images/hero.jpg',
  divisions: '/images/divisions/',
  teams: '/images/teams/',
  gallery: '/images/gallery/'
};