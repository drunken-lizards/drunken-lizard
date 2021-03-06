import bunyan from 'bunyan';

import * as actions from './actions';

const log = bunyan.createLogger({ name: 'lizard' });

const initialState = {
  beers: [],
  showAll: true,
};

export default function endpointsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_BEERS_SUCCESS: {
      log.info('action - beer - FETCH_BEERS_SUCCESS');
      return {
        ...state,
        beers: action.payload,
      };
    }
    case actions.FETCH_BEERS_FAILURE: {
      return {
        ...state,
        beers: [],
      };
    }
    case actions.TOGGLE_SHOW_ALL: {
      return {
        ...state,
        showAll: action.payload.checked,
      };
    }
    default: {
      return state;
    }
  }
}
