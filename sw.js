importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB3u3U09Nq5M25n2v5y...",
  authDomain: "unique-haven-house.firebaseapp.com",
  projectId: "unique-haven-house",
  storageBucket: "unique-haven-house.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
  console.log('BG push', payload);
  return self.registration.showNotification(payload.notification.title || 'UNIQUE HAVEN HOUSE',{
    body: payload.notification.body || '🔔 New message/job',
    vibrate: [200,100,200],
    tag: 'unique-haven'
  });
});

self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(clients.openWindow('./'));
});
