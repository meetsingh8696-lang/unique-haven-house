self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'New Job Assigned from HAVEN HOUSE!';
  event.waitUntil(
    self.registration.showNotification('UNIQUE HAVEN HOUSE', {
      body: data,
      icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
      vibrate: [200, 100, 200],
      tag: 'haven-job',
      requireInteraction: true
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/unique-haven-house/')
  );
});
