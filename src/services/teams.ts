import { supabase } from '../lib/supabase';
import { Team } from '../lib/types';
import { logAuditEvent } from '../lib/audit';

export async function getTeams() {
  const { data, error } = await supabase
    .from('teams')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createTeam(team: Partial<Team>) {
  const { data, error } = await supabase
    .from('teams')
    .insert([team])
    .select()
    .single();

  if (error) throw error;
  await logAuditEvent('team_created', { teamId: data.id });
  return data;
}

export async function updateTeam(id: string, team: Partial<Team>) {
  const { error } = await supabase
    .from('teams')
    .update(team)
    .eq('id', id);

  if (error) throw error;
  await logAuditEvent('team_updated', { teamId: id });
}

export async function deleteTeam(id: string) {
  const { error } = await supabase
    .from('teams')
    .delete()
    .eq('id', id);

  if (error) throw error;
  await logAuditEvent('team_deleted', { teamId: id });
}