import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Team } from '../../lib/types';
import { ContentEditor } from './ContentEditor';
import { Plus, Trash2 } from 'lucide-react';

export function TeamManager() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const querySnapshot = await getDocs(collection(db, 'teams'));
    const teamsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Team[];
    setTeams(teamsData);
  };

  const handleAdd = async () => {
    const newTeam = {
      title: 'New Team',
      description: '',
      type: 'special' as const
    };
    const docRef = await addDoc(collection(db, 'teams'), newTeam);
    setTeams([...teams, { ...newTeam, id: docRef.id }]);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'teams', id));
    setTeams(teams.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Teams</h2>
        <button
          onClick={handleAdd}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Team
        </button>
      </div>

      <div className="grid gap-6">
        {teams.map(team => (
          <div key={team.id} className="bg-white p-6 rounded-lg shadow-sm">
            {editingId === team.id ? (
              <ContentEditor
                id={team.id}
                initialData={team}
                category="teams"
                onSave={() => {
                  setEditingId(null);
                  loadTeams();
                }}
              />
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{team.title}</h3>
                  <p className="text-gray-600 mt-2">{team.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(team.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(team.id)}
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