import { useNotificationContext } from '../../../context/NotificationContext.js';

import './Notification.css';

function Notification() {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }
    return (
        <div className="notification-container">
            {notification.type === 'success'
                ?
                <div className="alert alert-success">
                    <strong>Готово!</strong> {notification.message}
                </div>
                :
                <div className="alert alert-danger">
                    <strong>Грешка!</strong> {notification.message}
                </div>
            }
        </div>
    )
}

export default Notification;

