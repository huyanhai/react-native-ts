import request from '../utils/request';

export const getInfo = () => {
  return request.get('https://echo.apifox.com/anything');
};
