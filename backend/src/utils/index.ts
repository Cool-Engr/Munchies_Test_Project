import { Filter, FilterList, OpenStatus, PriceRange, RespError, Restaurant, RestaurantList } from '@types';

export * from './api-error';
export * from './catch-async';
export * from './redis-util';

export function hasKey<K extends PropertyKey>(value: unknown, key: K): value is Record<K, unknown> & object {
  // First, narrow the 'unknown' type to a non-null object.
  // typeof null === 'object' in JS, so we must explicitly check for null.
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  // Use the 'in' operator to check for property existence.
  return key in value;
}

export function isRespError(
  data: RestaurantList | Restaurant | FilterList | Filter | OpenStatus | PriceRange | RespError
): data is RespError {
  return (data as RespError).error !== undefined;
}
