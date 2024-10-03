import { EventType } from '../../shared/types/types';

type Props = {
    event: EventType;
    onClose: () => void;
}

const Modal = ({event, onClose}: Props) => { 

  return (
    <div
        className='Modal'
        style={{ position: 'absolute', zIndex: 3}}
        >
        <p>Это модалка о {event.title}</p>
        <p>Срок: {event.start.toDateString()} - {event.end.toDateString()}</p>

        <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default Modal