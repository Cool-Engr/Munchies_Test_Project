import axios from 'axios';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

import config from '@config';
import { catchAsync, getRedisValue, setRedisValue } from '@utils';

export const getAllRestaurants = catchAsync(async (_: Request, res: Response) => {
  return await processApiCall(res, 'restaurants');
});

export const getRestaurantById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  return await processApiCall(res, `restaurants/${id}`);
});

export const getAllFilters = catchAsync(async (_: Request, res: Response) => {
  return await processApiCall(res, 'filter');
});

export const getFilterById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  return await processApiCall(res, `filter/${id}`);
});

export const getOpenStatusById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  return await processApiCall(res, `open/${id}`);
});

export const getAllPriceRanges = catchAsync(async (_: Request, res: Response) => {
  return res.json({
    ranges: [
      {
        id: 'd09ff4c9-e90e-42c7-b78b-bdc65e3331ce',
        range: '$'
      },
      {
        id: 'ff6b5391-2f0d-4b39-8ba8-d415c52a425d',
        range: '$$'
      },
      {
        id: 'f24fc0fb-a339-4240-a223-1365ec1aee07',
        range: '$$$'
      },
      {
        id: '93a626e5-5017-416b-9505-7411d22f7b38',
        range: '$$$$'
      }
    ]
  });
});

export const getPriceRangeById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  return await processApiCall(res, `price-range/${id}`);
});

const processApiCall = async (res: Response, callUrl: string) => {
  try {
    const redisCache = await getRedisValue(callUrl);
    if (!!redisCache) {
      return res.json(JSON.parse(redisCache));
    } else {
      const response = await axios.get(config.externalApi + '/' + callUrl);

      setRedisValue(callUrl, JSON.stringify(response.data));
      return res.json(response.data);
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return res
        .status(error.response?.status ?? httpStatus.BAD_GATEWAY)
        .json(error.response?.data.reason ?? 'Gateway error');
    } else {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json('Unexpected error occurred');
    }
  }
};
