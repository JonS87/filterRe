import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddServiceForm from './components/AddServiceForm';
import ServiceList from './components/ServiceList';
import { Service } from './types/serviceTypes';

const App: React.FC = () => {
  const [editingService, setEditService] = useState<Service | undefined>(undefined);
  const [filter, setFilter] = useState<string>('');

  const handleEdit = (service: Service) => {
    setEditService(service);
  };

  const handleCancel = () => {
    setEditService(undefined);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <Provider store={store}>
      <>
        <AddServiceForm editingService={editingService} onCancel={handleCancel}/>
        <input
          type="text"
          placeholder='Фильтр по названию'
          value={filter}
          onChange={handleFilterChange}
        />
        <ServiceList filter={filter} onEdit={handleEdit}/>
      </>
    </Provider>
  );
};

export default App;