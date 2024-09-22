import  { useState } from 'react';
import { Bell, X } from 'react-feather';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New document uploaded in CER category', date: '2024-06-15T10:30:00' },
    { id: 2, message: 'Verification required for DIAGNOSTIA document', date: '2024-06-14T14:00:00' },
    { id: 3, message: 'System update completed successfully', date: '2024-06-13T08:45:00' },
    { id: 4, message: 'New client registered for document classification', date: '2024-06-12T09:15:00' },
    { id: 5, message: 'Invoice generated for Vaerdia Software', date: '2024-06-11T16:30:00' },
  ]);

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Notifications</h1>

      {/* Notifications list */}
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
            <div className="flex items-center">
              <Bell className="h-6 w-6 text-gray-600 mr-4" />
              <div>
                <p className="text-gray-800">{notification.message}</p>
                <p className="text-sm text-gray-500">{new Date(notification.date).toLocaleString()}</p>
              </div>
            </div>
            <button onClick={() => removeNotification(notification.id)}>
              <X className="h-5 w-5 text-red-500" />
            </button>
          </div>
        ))}
      </div>

      {/* No notifications message */}
      {notifications.length === 0 && (
        <p className="text-gray-600 mt-4">No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;
