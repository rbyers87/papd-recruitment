import { supabase } from './supabase';

export async function logAuditEvent(action: string, details: any) {
  const { error } = await supabase
    .from('audit_logs')
    .insert([
      {
        action,
        details,
        user_id: (await supabase.auth.getUser()).data.user?.id,
        created_at: new Date().toISOString()
      }
    ]);

  if (error) {
    console.error('Error logging audit event:', error);
  }
}