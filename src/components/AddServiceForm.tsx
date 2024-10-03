import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addService, updateService } from '../actions/serviceActions';
import { Service } from '../types/serviceTypes';

interface AddServiceFormProps {
  editingService?: Service;
  onCancel?: () => void;
}

const AddServiceForm: React.FC<AddServiceFormProps> = ({ editingService, onCancel }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingService) {
      setName(editingService.name);
      setPrice(editingService.price);
    } else {
      setName('');
      setPrice('');
    }
  }, [editingService]);

  const handleSubmit = () => {
    if (editingService) {
      dispatch(updateService({ ...editingService, name, price: Number(price) }));
      setName('');
      setPrice('');
      onCancel?.();
    } else {
      dispatch(addService({ id: 0, name, price: Number(price) }));
      setName('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={(e) => {e.preventDefault(); handleSubmit(); }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите наименование услуги"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Стоимость"
        required
      />
      <button type="submit">Save</button>
      {editingService && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default AddServiceForm;
