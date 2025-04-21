import {create} from 'zustand';
import FailureEntity from '../../../domain/entities/failureEntity';
import {NewsItem} from '../../../domain/entities/news';
import di from '../../../di/appModule';

// export class Loading {}

// export class LoadingNextPage {}

// export class Loaded {
//   data: NewsItem[];
//   isEndOfList: boolean;

//   constructor(data: NewsItem[], isEndOfList: boolean = false) {
//     this.data = data;
//     this.isEndOfList = isEndOfList;
//   }
// }

// export class LoadingFailed {
//   error: FailureEntity;

//   constructor(error: FailureEntity) {
//     this.error = error;
//   }
// }

// export class LoadingNextPageFailed {
//   error: FailureEntity;

//   constructor(error: FailureEntity) {
//     this.error = error;
//   }
// }

export type SearchState = {
  searchQuery: string;
  pageNumber: number;
  data: NewsItem[];
  firstLoading: boolean;
  nextPageLoadng: boolean;
  firstPageError: FailureEntity | null;
  nextPageError: FailureEntity | null;
  isLastPage: boolean;
};

export type SearchActions = {
  loadCurrentPage: () => void;
  loadNextPage: () => void;
  updateSearchQuery: (input: string) => void;
  refreshScreen: () => void;
  refreshNextPage: () => void;
};

const initialState = {
  searchQuery: '',
  pageNumber: 0,
  data: [],
  firstLoading: true,
  nextPageLoadng: false,
  firstPageError: null,
  nextPageError: null,
  isLastPage: false,
};

const resetLoadingState = {firstLoading: false, nextPageLoadng: false};
const resetErrorState = {firstPageError: null, nextPageError: null};

export const useSearchState = create<SearchState & SearchActions>(
  (set, get) => ({
    ...initialState,
    loadCurrentPage: async () => {
      const isFirstPageLoading = get().pageNumber === 0;
      set(state => ({
        ...state,
        ...resetErrorState,
        firstLoading: isFirstPageLoading,
        nextPageLoadng: !isFirstPageLoading,
      }));

      console.log(`loading Page: ${get().pageNumber}`);
      const result = await di.getNewsFromSearchQueryUseCase.call(
        get().searchQuery,
        get().pageNumber,
      );

      if (result instanceof FailureEntity) {
        const stateContainsCachedData = get().data.length > 0;
        set(state => ({
          ...state,
          ...resetLoadingState,
          nextPageError: stateContainsCachedData ? result : null,
          firstPageError: stateContainsCachedData ? null : result,
        }));
      } else {
        set(state => ({
          ...state,
          ...resetErrorState,
          ...resetLoadingState,
          data: state.data.concat(...result),
          isLastPage: result.length === 0,
        }));
      }
    },
    loadNextPage: async () => {
      set(state => ({...state, pageNumber: state.pageNumber + 1}));
      await get().loadCurrentPage();
    },
    updateSearchQuery: async input => {
      set(state => ({...initialState, searchQuery: input}));
      await get().loadCurrentPage();
    },
    refreshNextPage: async () => {
      await get().loadCurrentPage();
    },
    refreshScreen: async () => {
      set(state => ({
        ...initialState,
        searchQuery: get().searchQuery,
        pageNumber: 0,
      }));
      await get().loadCurrentPage();
    },
  }),
);
