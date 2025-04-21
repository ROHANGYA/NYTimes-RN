import {NewsItem} from '../../../domain/entities/news';
import di from '../../../di/appModule';
import FailureEntity from '../../../domain/entities/failureEntity';
import {create} from 'zustand';

export class Loading {}

export class Loaded {
  data: NewsItem[];

  constructor(data: NewsItem[]) {
    this.data = data;
  }
}

export class LoadingFailed {
  error: FailureEntity;

  constructor(error: FailureEntity) {
    this.error = error;
  }
}

export type MostViewedState = {
  current: Loading | Loaded | LoadingFailed;
};

export type MostViewedActions = {
  loadData: () => void;
};

export const useMostViewedState = create<MostViewedState & MostViewedActions>(
  set => ({
    current: new Loading(),
    loadData: async () => {
      set(state => ({current: new Loading()}));
      const mostViewedResult = await di.getMostViewedNewsUseCase.call();
      if (mostViewedResult instanceof FailureEntity) {
        set(state => ({current: new LoadingFailed(mostViewedResult)}));
      } else {
        set(state => ({current: new Loaded(mostViewedResult)}));
      }
    },
  }),
);
