importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

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
  const title = payload.notification?.title || "Unique Haven House";
  const options = {
    body: payload.notification?.body || "New update",
    icon: "/icon-192.png",
    badge: "/icon-192.png"
  };
  self.registration.showNotification(title, options);
});
