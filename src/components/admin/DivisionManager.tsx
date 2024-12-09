import React, { useEffect, useState } from 'react';
import { Division } from '../../lib/types';
import { ContentEditor } from './ContentEditor';
import { Plus, Trash2 } from 'lucide-react';
import { getDivisions, createDivision, deleteDivision } from '../../services/divisions';

export function DivisionManager() {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDivisions();
  }, []);

  const loadDivisions = async () => {
    try {
      setLoading(true);
      const data = await getDivisions();
      setDivisions(data);
      setError(null);
    } catch (err) {
      setError('Failed to load divisions');
      console.error('Error loading divisions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    try {
      const newDivision = {
        title: 'New Division',
        description: '',
        type: 'full-time' as const
      };
      const data = await createDivision(newDivision);
      setDivisions([data, ...divisions]);
      setError(null);
    } catch (err) {
      setError('Failed to create division');
      console.error('Error creating division:', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDivision(id);
      setDivisions(divisions.filter(d => d.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete division');
      console.error('Error deleting division:', err);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Divisions</h2>
        <button
          onClick={handleAdd}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Division
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="grid gap-6">
        {divisions.map(division => (
          <div key={division.id} className="bg-white p-6 rounded-lg shadow-sm">
            {editingId === division.id ? (
              <ContentEditor
                id={division.id}
                initialData={division}
                category="divisions"
                onSave={async (data) => {
                  try {
                    await updateDivision(division.id, data);
                    await loadDivisions();
                    setEditingId(null);
                    setError(null);
                  } catch (err) {
                    setError('Failed to update division');
                    console.error('Error updating division:', err);
                  }
                }}
              />
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{division.title}</h3>
                  <p className="text-gray-600 mt-2">{division.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(division.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(division.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}