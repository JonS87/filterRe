import React from 'react';
import { Service } from '../types/serviceTypes';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './Components.module.css';

const ServiceItem: React.FC<{ service: Service; onEdit: () => void; onDelete: () => void }> = ({ service, onEdit, onDelete }) => {
  return (
    <li className={styles['item']}>
      <span>{`${service.name} ${service.price}`}</span>
      <div>
        <button onClick={onEdit} title='Редактировать'><FaEdit /></button>
        <button onClick={onDelete} title='Удалить'><FaTrash /></button>
      </div>
    </li>
  );
};

export default ServiceItem;
