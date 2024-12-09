import React, { useEffect, useState } from 'react';
import { GalleryItem } from '../../lib/types';
import { ContentEditor } from './ContentEditor';
import { Plus, Trash2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { logAuditEvent } from '../../lib/audit';

export function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading gallery:', error);
      return;
    }

    setItems(data || []);
  };

  const handleAdd = async () => {
    const newItem = {
      title: 'New Image',
      description: '',
      imageUrl: '',
      category: 'general'
    };

    const { data, error } = await supabase
      .from('gallery')
      .insert([newItem])
      .select()
      .single();

    if (error) {
      console.error('Error adding gallery item:', error);
      return;
    }

    if (data) {
      setItems([data, ...items]);
      await logAuditEvent('gallery_item_created', { itemId: data.id });
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting gallery item:', error);
      return;
    }

    setItems(items.filter(item => item.id !== id));
    await logAuditEvent('gallery_item_deleted', { itemId: id });
  };

  const handleSave = async (id: string, data: Partial<GalleryItem>) => {
    const { error } = await supabase
      .from('gallery')
      .update(data)
      .eq('id', id);

    if (error) {
      console.error('Error updating gallery item:', error);
      return;
    }

    await loadGallery();
    setEditingId(null);
    await logAuditEvent('gallery_item_updated', { itemId: id });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Gallery</h2>
        <button
          onClick={handleAdd}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Image
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
            {editingId === item.id ? (
              <ContentEditor
                id={item.id}
                initialData={item}
                category="gallery"
                onSave={(data) => handleSave(item.id, data)}
              />
            ) : (
              <div>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingId(item.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}