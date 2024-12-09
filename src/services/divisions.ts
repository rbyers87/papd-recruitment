import { supabase } from '../lib/supabase';
import { Division } from '../lib/types';
import { logAuditEvent } from '../lib/audit';

export async function getDivisions() {
  const { data, error } = await supabase
    .from('divisions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createDivision(division: Partial<Division>) {
  const { data, error } = await supabase
    .from('divisions')
    .insert([division])
    .select()
    .single();

  if (error) throw error;
  await logAuditEvent('division_created', { divisionId: data.id });
  return data;
}

export async function updateDivision(id: string, division: Partial<Division>) {
  const { error } = await supabase
    .from('divisions')
    .update(division)
    .eq('id', id);

  if (error) throw error;
  await logAuditEvent('division_updated', { divisionId: id });
}

export async function deleteDivision(id: string) {
  const { error } = await supabase
    .from('divisions')
    .delete()
    .eq('id', id);

  if (error) throw error;
  await logAuditEvent('division_deleted', { divisionId: id });
}