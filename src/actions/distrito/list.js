// import { toast } from 'components';
// import i18n from 'i18n';
import httpRequest from '../../utils/index'

export function error(error) {
  return {
    type: 'DISTRITO_LIST_ERROR', error,
  };
}

export function loading(loading) {
  return {
    type: 'DISTRITO_LIST_LOADING', loading,
  };
}

export function success(data) {
  return {
    type: 'DISTRITO_LIST_SUCCESS', data,
  };
}

export function list(page = 'distritos') {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(error(''));
    httpRequest(page)
      .then((data) => {
        dispatch(loading(false));
        dispatch(success(data.res));
      })
      .catch((e) => {
        // toast.error(i18n.t('toastError'));
        dispatch(loading(false));
        dispatch(error(e.message));
      });
  };
}

export function reset() {
  return {
    type: 'DISTRITO_LIST_RESET',
  };
}