import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Header from '../components/Header';
export default function Notifications() {
  function handleClick(type) {
    console.log(type);
    switch (type) {
      case 1:
        NotificationManager.warning('Notificação de alerta', 'Alerta', 5000);
        break;
      case 2:
        NotificationManager.error('Notificação de erro', 'Erro', 5000);
        break;
      case 3:
        NotificationManager.success('Notificação de sucesso', 'Sucesso', 5000);
        break;
      case 4:
        NotificationManager.info('Notificação de informação', 'Info', 5000);
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <Header />
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          margin: '40px 0px',
        }}
      >
        <button className="btn btn-warning" onClick={() => handleClick(1)}>
          Alerta
        </button>
        <button className="btn btn-danger" onClick={() => handleClick(2)}>
          Erro
        </button>
        <button className="btn btn-success" onClick={() => handleClick(3)}>
          Sucesso
        </button>
        <button className="btn btn-info" onClick={() => handleClick(4)}>
          Informativo
        </button>
        <NotificationContainer />
      </div>
    </div>
  );
}
