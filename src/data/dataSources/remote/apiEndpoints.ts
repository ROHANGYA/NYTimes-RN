export const endpoints = {
  MostViewedNews: 'svc/mostpopular/v2/viewed/1.json',
  NewsDetails: (id: number): string => `/News/${id}`,
};
