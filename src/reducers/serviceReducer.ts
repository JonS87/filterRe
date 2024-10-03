import { Service } from '../types/serviceTypes';
import { ADD_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from '../actions/serviceActions';

interface ServiceState {
  services: Service[];
}

const initialState: ServiceState = {
  services: [],
};

type Action =
  | { type: typeof ADD_SERVICE; payload: Service }
  | { type: typeof UPDATE_SERVICE; payload: Service }
  | { type: typeof DELETE_SERVICE; payload: number };

const serviceReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return { ...state, services: [...state.services, action.payload] };
    case UPDATE_SERVICE:
      return {
        ...state,
        services: state.services.map((service) =>
          service.id === action.payload.id ? action.payload : service
        ),
      };
    case DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter((service) => service.id !== action.payload),
      };
    default:
      return state;
  }
};

export default serviceReducer;
