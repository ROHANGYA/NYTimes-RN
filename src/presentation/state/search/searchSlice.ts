// interface SearchState {
//   data: NewsItem[];

//   firstLoading: boolean;
//   nextPageLoadng: boolean;
//   firstPageError: FailureEntity | null;
//   nextPageError: FailureEntity | null;
//   isLastPage: boolean;
// }

// type searchPageParam = {
//   pageNumber: number;
//   searchQuery: string;
// };

// const initState: SearchState = {
//   data: [],

//   firstLoading: true,
//   nextPageLoadng: false,
//   firstPageError: null,
//   nextPageError: null,
//   isLastPage: false,
// };

// const searchSlice = createSlice({
//   name: 'Search',
//   initialState: initState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(searchNewsList.pending, (state, action) => {
//         if (action.meta.arg.pageNumber === 0) {
//           state.firstLoading = true;
//           state.nextPageLoadng = false;
//           state.data = [];
//         } else {
//           state.firstLoading = false;
//           state.nextPageLoadng = true;
//         }
//         state.firstPageError = null;
//         state.nextPageError = null;
//       })
//       .addCase(searchNewsList.rejected, (state, action) => {
//         if (action.meta.arg.pageNumber === 0) {
//           state.firstPageError = action.payload as FailureEntity;
//         } else {
//           state.nextPageError = action.payload as FailureEntity;
//         }
//         state.firstLoading = false;
//         state.nextPageLoadng = false;
//       })
//       .addCase(searchNewsList.fulfilled, (state, action) => {
//         if (action.meta.arg.pageNumber === 0) {
//           state.data = action.payload;
//         } else {
//           state.data.push(...action.payload);
//         }

//         state.isLastPage = action.payload.length === 0;
//         state.firstLoading = false;
//         state.nextPageLoadng = false;
//         state.firstPageError = null;
//         state.nextPageError = null;
//       });
//   },
// });

// export const searchNewsList = createAsyncThunk<NewsItem[], searchPageParam>(
//   'search/newsList',
//   async (params, thunk) => {
//     const result = await di.getNewsFromSearchQueryUseCase.call(
//       params.searchQuery,
//       params.pageNumber,
//     );

//     if (result instanceof FailureEntity) {
//       return thunk.rejectWithValue(result);
//     } else {
//       return thunk.fulfillWithValue(result);
//     }
//   },
// );

// export const {} = searchSlice.actions;

// export default searchSlice.reducer;
