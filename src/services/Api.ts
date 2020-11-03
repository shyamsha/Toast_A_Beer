import config from "../config/app";
// import requestConfig from "../config/request";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const getBeers = () => {
  const url = `${API_ENDPOINT}/beers/?per_page=10`;
  return API.get(url);
};

export const randomBeer = () => {
  const url = `${API_ENDPOINT}/beers/random`;
  return API.get(url);
};

export const getSingleBeer = (params: { id: number }) => {
  const url = `${API_ENDPOINT}/beers/${params.id}`;
  return API.get(url);
};

export const pagination =(params:{page:number,size:number})=>{
  const url = `${API_ENDPOINT}/beers?page=${params.page}&per_page=10`
  return API.get(url)
}
