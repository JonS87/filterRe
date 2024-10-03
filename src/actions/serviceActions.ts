import { Service } from '../types/serviceTypes';

export const ADD_SERVICE = 'ADD_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const DELETE_SERVICE = 'DELETE_SERVICE';

let nextId = 1;

export const addService = (service: Service) => ({
  type: ADD_SERVICE,
  payload: { ...service, id: nextId++ },
});

export const updateService = (service: Service) => ({
  type: UPDATE_SERVICE,
  payload: service,
});

export const deleteService = (id: number) => ({
  type: DELETE_SERVICE,
  payload: id,
});
