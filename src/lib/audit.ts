import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

export async function logAuditEvent(action: string, details: any) {
  await addDoc(collection(db, 'audit_logs'), {
    action,
    details,
    timestamp: new Date(),
    userId: auth.currentUser?.uid
  });
}