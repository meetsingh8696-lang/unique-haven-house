self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{self.clients.claim();});
self.addEventListener('push',e=>{
  let data=e.data?e.data.text():'🔔 New message/job';
  e.waitUntil(self.registration.showNotification('UNIQUE HAVEN HOUSE',{body:data,vibrate:[200,100,200],tag:'unique-haven'}));
});
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(clients.openWindow('./'));
});
