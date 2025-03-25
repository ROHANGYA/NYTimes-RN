import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NewsItem} from '../../../domain/entities/news';
import di from '../../../di/appModule';

interface HomeState {
  newsList: NewsItem[];
  isLoading: boolean;
  error: String | null;
}

const initState: HomeState = {
  newsList: [],
  isLoading: true,
  error: null,
};

const homeSlice = createSlice({
  name: 'Home',
  initialState: initState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchMostViewedNewsList.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMostViewedNewsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.toString();
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
    try {
      return await di.getMostViweedNewsUseCase.call();
    } catch (err) {
      return thunk.rejectWithValue('test');
    }
  },
);

export const {} = homeSlice.actions;

export default homeSlice.reducer;
