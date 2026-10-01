importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC8pET9aGyiCLEQB0SlAyW0uxeeD_bN5Zc",
  authDomain: "unique-haven-house.firebaseapp.com",
  projectId: "unique-haven-house",
  storageBucket: "unique-haven-house.firebasestorage.app",
  messagingSenderId: "863147801991",
  appId: "1:863147801991:web:71dad5c6b88bc0367ae722"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Push:', payload);
  const title = payload.notification?.title || 'UNIQUE HAVEN HOUSE';
  const options = {
    body: payload.notification?.body || '🔔 New message/job received',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'haven-push'
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('./'));
});
