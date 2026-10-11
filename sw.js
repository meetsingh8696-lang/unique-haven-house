importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");
firebase.initializeApp({apiKey:"AIzaSyC8pET9aGyiCLEQB0SlAyW0uxeeD_bN5Zc",authDomain:"unique-haven-house.firebaseapp.com",projectId:"unique-haven-house",storageBucket:"unique-haven-house.firebasestorage.app",messagingSenderId:"863147801991",appId:"1:863147801991:web:71dad5c6b88bc0367ae722"});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(function(payload){
  const title=payload.notification?payload.notification.title:payload.data?payload.data.title:'UNIQUE HAVEN';
  const body=payload.notification?payload.notification.body:payload.data?payload.data.body:'New update';
  self.registration.showNotification(title,{body:body,icon:'./icon-192.png',vibrate:[200,100,200]});
});
