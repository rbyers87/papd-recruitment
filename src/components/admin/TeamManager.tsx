import React, { useEffect, useState } from 'react';
import { Team } from '../../lib/types';
import { ContentEditor } from './ContentEditor';
import { Plus, Trash2 } from 'lucide-react';
import { getTeams, createTeam, deleteTeam, updateTeam } from '../../services/teams';

export function TeamManager() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    try {
      setLoading(true);
      const data = await getTeams();
      setTeams(data);
      setError(null);
    } catch (err) {
      setError('Failed to load teams');
      console.error('Error loading teams:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    try {
      const newTeam = {
        title: 'New Team',
        description: '',
        type: 'special' as const
      };
      const data = await createTeam(newTeam);
      setTeams([data, ...teams]);
      setError(null);
    } catch (err) {
      setError('Failed to create team');
      console.error('Error creating team:', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTeam(id);
      setTeams(teams.filter(t => t.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete team');
      console.error('Error deleting team:', err);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

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

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="grid gap-6">
        {teams.map(team => (
          <div key={team.id} className="bg-white p-6 rounded-lg shadow-sm">
            {editingId === team.id ? (
              <ContentEditor
                id={team.id}
                initialData={team}
                category="teams"
                onSave={async (data) => {
                  try {
                    await updateTeam(team.id, data);
                    await loadTeams();
                    setEditingId(null);
                    setError(null);
                  } catch (err) {
                    setError('Failed to update team');
                    console.error('Error updating team:', err);
                  }
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