import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NewsItem} from '../../../domain/entities/news';
import di from '../../../di/appModule';
import FailureEntity from '../../../domain/entities/failureEntity';

interface HomeState {
  newsList: NewsItem[];
  isLoading: boolean;
  error: FailureEntity | null;
}

const initState: HomeState = {
  newsList: [],
  isLoading: true,
  error: null,
};

const homeSlice = createSlice({
  name: 'Home',
  initialState: initState,
  reducers: {
    refreshHomePage: state => {
      fetchMostViewedNewsList();
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchMostViewedNewsList.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMostViewedNewsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureEntity;
      })
      .addCase(fetchMostViewedNewsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.newsList = action.payload;
      });
  },
});

export const fetchMostViewedNewsList = createAsyncThunk<NewsItem[]>(
  'home/mostViewedList',
  async (_, thunk) => {
    const result = await di.getMostViewedNewsUseCase.call();
    if (result instanceof FailureEntity) {
      return thunk.rejectWithValue(result);
    } else {
      return thunk.fulfillWithValue(result);
    }
  },
);

export const fetchTopStoriesNewsList = createAsyncThunk<
  NewsItem[],
  NewsCategories
>('home/TopStoriesList', async (category, thunk) => {
  const result = await di.getTopStoriesByCategoryUseCase.call(category);
  if (result instanceof FailureEntity) {
    return thunk.rejectWithValue(result);
  } else {
    return thunk.fulfillWithValue(result);
  }
});

export const {refreshHomePage} = homeSlice.actions;

export default homeSlice.reducer;
