import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Division } from '../../lib/types';
import { ContentEditor } from './ContentEditor';
import { Plus, Trash2 } from 'lucide-react';

export function DivisionManager() {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadDivisions();
  }, []);

  const loadDivisions = async () => {
    const querySnapshot = await getDocs(collection(db, 'divisions'));
    const divisionsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Division[];
    setDivisions(divisionsData);
  };

  const handleAdd = async () => {
    const newDivision = {
      title: 'New Division',
      description: '',
      type: 'full-time' as const
    };
    const docRef = await addDoc(collection(db, 'divisions'), newDivision);
    setDivisions([...divisions, { ...newDivision, id: docRef.id }]);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'divisions', id));
    setDivisions(divisions.filter(d => d.id !== id));
  };

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

      <div className="grid gap-6">
        {divisions.map(division => (
          <div key={division.id} className="bg-white p-6 rounded-lg shadow-sm">
            {editingId === division.id ? (
              <ContentEditor
                id={division.id}
                initialData={division}
                category="divisions"
                onSave={() => {
                  setEditingId(null);
                  loadDivisions();
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