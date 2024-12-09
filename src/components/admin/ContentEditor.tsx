import React, { useState } from 'react';
import { ImageUpload } from './ImageUpload';
import { Save } from 'lucide-react';

interface ContentEditorProps {
  id: string;
  initialData: {
    title: string;
    description: string;
    imageUrl?: string;
  };
  category: 'divisions' | 'teams' | 'gallery';
  onSave: (data: any) => Promise<void>;
}

export function ContentEditor({ id, initialData, category, onSave }: ContentEditorProps) {
  const [data, setData] = useState(initialData);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    try {
      setSaving(true);
      await onSave(data);
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setData(prev => ({ ...prev, imageUrl: url }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={data.description}
          onChange={(e) => setData(prev => ({ ...prev, description: e.target.value }))}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {data.imageUrl && (
        <div className="mt-4">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="w-full max-w-md rounded-lg"
          />
        </div>
      )}

      <ImageUpload
        category={category}
        onUploadComplete={handleImageUpload}
      />

      <button
        onClick={handleSave}
        disabled={saving}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        <Save className="w-4 h-4 mr-2" />
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
}