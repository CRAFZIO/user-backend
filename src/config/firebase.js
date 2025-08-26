const admin = require('firebase-admin');

let initialized = false;

function initFirebase() {
  if (initialized) return;
  try {
    // Admin SDK will auto-read GOOGLE_APPLICATION_CREDENTIALS if set
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: process.env.FIREBASE_DB_URL || undefined,
      });
    }
    initialized = true;
    console.log('Firebase Admin initialized');
  } catch (err) {
    console.warn('Firebase Admin not initialized:', err.message);
  }
}

function getRealtimeDb() {
  initFirebase();
  if (!admin.apps.length) return null;
  return admin.database();
}

module.exports = { initFirebase, getRealtimeDb };


