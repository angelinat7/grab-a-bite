import { CATEGORY_RESOURCE_URL } from '../constants/url';
import api from './api';

export async function getAll() {
  return api.get(CATEGORY_RESOURCE_URL);
}
