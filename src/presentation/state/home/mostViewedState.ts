import {NewsItem} from '../../../domain/entities/news';
import di from '../../../di/appModule';
import FailureEntity from '../../../domain/entities/failureEntity';
import {create} from 'zustand';

// interface HomeStated {
//   mostViewedNewsList: NewsItem[];
//   mostViewedNewsListIsLoading: boolean;
//   mostViewedNewsError: FailureEntity | null;
//   ofInterestNewsList: NewsItem[];
//   ofInterestNewsListIsLoading: boolean;
//   ofInterestNewsError: FailureEntity | null;
// }

// const initState: HomeStated = {
//   mostViewedNewsList: [],
//   mostViewedNewsListIsLoading: false,
//   mostViewedNewsError: null,
//   ofInterestNewsList: [],
//   ofInterestNewsListIsLoading: true,
//   ofInterestNewsError: null,
// };

// const homeSlice = createSlice({
//   name: 'Home',
//   initialState: initState,
//   reducers: {
//     refreshHomePage: state => {
//       //fetchMostViewedNewsList();
//     },
//   },

//   extraReducers: builder => {
//     builder
//       .addCase(fetchMostViewedNewsList.pending, state => {
//         state.mostViewedNewsListIsLoading = true;
//         state.mostViewedNewsError = null;
//         state.ofInterestNewsError = null;
//       })
//       .addCase(fetchMostViewedNewsList.rejected, (state, action) => {
//         state.mostViewedNewsListIsLoading = false;
//         state.mostViewedNewsError = action.payload as FailureEntity;
//       })
//       .addCase(fetchMostViewedNewsList.fulfilled, (state, action) => {
//         state.mostViewedNewsListIsLoading = false;
//         state.mostViewedNewsError = null;
//         state.mostViewedNewsList = action.payload;
//       })
//       .addCase(fetchTopStoriesNewsList.pending, state => {
//         state.ofInterestNewsListIsLoading = true;
//         state.ofInterestNewsError = null;
//       })
//       .addCase(fetchTopStoriesNewsList.rejected, (state, action) => {
//         state.ofInterestNewsListIsLoading = false;
//         state.ofInterestNewsError = action.payload as FailureEntity;
//       })
//       .addCase(fetchTopStoriesNewsList.fulfilled, (state, action) => {
//         state.ofInterestNewsListIsLoading = false;
//         state.ofInterestNewsError = null;
//         state.ofInterestNewsList = action.payload;
//       });
//   },
// });

// export const fetchMostViewedNewsList = createAsyncThunk<NewsItem[]>(
//   'home/mostViewedList',
//   async (_, thunk) => {
//     const result = await di.getMostViewedNewsUseCase.call();
//     if (result instanceof FailureEntity) {
//       return thunk.rejectWithValue(result);
//     } else {
//       return thunk.fulfillWithValue(result);
//     }
//   },
// );

// export const fetchTopStoriesNewsList = createAsyncThunk<
//   NewsItem[],
//   NewsCategories
// >('home/TopStoriesList', async (category, thunk) => {
//   const result = await di.getTopStoriesByCategoryUseCase.call(category);
//   if (result instanceof FailureEntity) {
//     return thunk.rejectWithValue(result);
//   } else {
//     return thunk.fulfillWithValue(result);
//   }
// });

// export const {refreshHomePage} = homeSlice.actions;

// export default homeSlice.reducer;

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
