self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){self.clients.claim();});
self.addEventListener('push',function(e){
  var data = e.data? e.data.text() : 'New job or chat message';
  e.waitUntil(self.registration.showNotification('UNIQUE HAVEN HOUSE',{
    body:data,
    icon:'./icon-192.png',
    vibrate:[200,100,200]
  }));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  e.waitUntil(clients.openWindow('./'));
});
