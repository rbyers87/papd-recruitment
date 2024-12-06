import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { GalleryItem } from '../../lib/types';
import { ContentEditor } from './ContentEditor';
import { Plus, Trash2 } from 'lucide-react';

export function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    const querySnapshot = await getDocs(collection(db, 'gallery'));
    const galleryData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as GalleryItem[];
    setItems(galleryData);
  };

  const handleAdd = async () => {
    const newItem = {
      title: 'New Image',
      description: '',
      imageUrl: '',
      category: 'general'
    };
    const docRef = await addDoc(collection(db, 'gallery'), newItem);
    setItems([...items, { ...newItem, id: docRef.id }]);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'gallery', id));
    setItems(items.filter(item => item.id !== id));
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
                onSave={() => {
                  setEditingId(null);
                  loadGallery();
                }}
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