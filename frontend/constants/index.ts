export const EXTERNAL_SERVER_URL = 'https://work-test-web-2024-eze6j4scpq-lz.a.run.app'
export const API_SERVER_URL = process.env.API_SERVER_URL || 'http://127.0.0.1:8282/api'

export const FILTER_TIME = [
  { from: 0, to: 10, title: '0-10 min' },
  { from: 11, to: 30, title: '10-30 min' },
  { from: 31, to: 60, title: '30-60 min' },
  { from: 61, to: -1, title: '1 hour+' }
]

export const FILTER_PRICE = ['$', '$$', '$$$', '$$$$']
