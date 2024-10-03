import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteService } from '../actions/serviceActions';
import ServiceItem from './ServiceItem';
import { Service } from '../types/serviceTypes';
import { RootState } from '../store/store';

interface ServiceListProps {
  filter: string;
  onEdit: (service: Service) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ filter, onEdit }) => {
  const services = useSelector((state: RootState) => state.services);
  const dispatch = useDispatch();
  
  const filteredServices = services.filter((service: Service) => 
    service.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredServices.map((service: Service) => (
        <ServiceItem
          key={service.id}
          service={service}
          onEdit={ () => onEdit(service) }
          onDelete={() => dispatch(deleteService(service.id))}
        />
      ))}
    </ul>
  );
};

export default ServiceList;
