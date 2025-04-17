import {create} from 'zustand';
import di from '../../../di/appModule';
import FailureEntity from '../../../domain/entities/failureEntity';
import {NewsItem} from '../../../domain/entities/news';
import NewsCategories from '../../../domain/entities/enums/newsCategories';

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

export type OfInterestState = {
  newsCategory: NewsCategories;
  current: Loading | Loaded | LoadingFailed;
};

export type OfInterestActions = {
  loadData: (category?: NewsCategories) => void;
};

export const useOfInterestState = create<OfInterestState & OfInterestActions>(
  set => ({
    newsCategory: NewsCategories.arts,
    current: new Loading(),
    loadData: async category => {
      set(state => ({
        newsCategory: category ?? state.newsCategory,
        current: new Loading(),
      }));
      const mostViewedResult = await di.getTopStoriesByCategoryUseCase.call(
        category ?? useOfInterestState.getState().newsCategory,
      );
      if (mostViewedResult instanceof FailureEntity) {
        set(state => ({current: new LoadingFailed(mostViewedResult)}));
      } else {
        set(state => ({current: new Loaded(mostViewedResult)}));
      }
    },
  }),
);
