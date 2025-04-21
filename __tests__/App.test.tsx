/**
 * @format
 */

import {act} from 'react';

import FailureEntity from '../src/domain/entities/failureEntity';
import {NewsItem} from '../src/domain/entities/news';
import {useSearchState} from '../src/presentation/state/search/searchState';
import {DateTime} from 'luxon';
import {renderHook} from '@testing-library/react-native';

jest.mock('../src/di/appModule', () => ({
  __esModule: true, // Required to properly mock ES default exports in CommonJS-style Jest
  default: {
    getNewsFromSearchQueryUseCase: {
      call: jest.fn(),
    },
  },
}));

import di from '../src/di/appModule';

const mockNewsItem: NewsItem = {
  id: 1,
  title: 'Test News',
  description: 'This is a test.',
  date: DateTime.now(),
  imageUrl: 'string',
};

function resetSearchState() {
  useSearchState.setState({
    searchQuery: '',
    pageNumber: 0,
    data: [],
    firstLoading: true,
    nextPageLoadng: false,
    firstPageError: null,
    nextPageError: null,
    isLastPage: false,
  });
}

describe('useSearchState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    resetSearchState();
  });

  it('loads the first page successfully', async () => {
    (di.getNewsFromSearchQueryUseCase.call as jest.Mock).mockResolvedValue([
      mockNewsItem,
    ]);

    const {result} = renderHook(() => useSearchState());

    await act(async () => {
      await result.current.loadCurrentPage();
    });

    expect(result.current.firstLoading).toBe(false);
    expect(result.current.data).toEqual([mockNewsItem]);
    expect(result.current.firstPageError).toBeNull();
  });

  it('loads the next page successfully', async () => {
    (di.getNewsFromSearchQueryUseCase.call as jest.Mock)
      .mockResolvedValue([mockNewsItem])
      .mockResolvedValueOnce([mockNewsItem]);

    const {result} = renderHook(() => useSearchState());

    await act(async () => {
      await result.current.loadCurrentPage(); // page 0
      await result.current.loadNextPage(); // page 1
    });

    expect(result.current.firstLoading).toBe(false);
    expect(result.current.data).toEqual([mockNewsItem, mockNewsItem]);
    expect(result.current.firstPageError).toBeNull();
    expect(result.current.pageNumber).toBe(1);
  });

  it('handles first page failure with no cached data', async () => {
    const failure = new FailureEntity({});
    (di.getNewsFromSearchQueryUseCase.call as jest.Mock).mockResolvedValue(
      failure,
    );

    const {result} = renderHook(() => useSearchState());

    await act(async () => {
      await result.current.loadCurrentPage();
    });

    expect(result.current.firstPageError).toBeInstanceOf(FailureEntity);
    expect(result.current.nextPageError).toBeNull();
    expect(result.current.firstLoading).toBe(false);
  });

  it('handles next page failure with cached data', async () => {
    const failure = new FailureEntity({});
    (di.getNewsFromSearchQueryUseCase.call as jest.Mock)
      .mockResolvedValueOnce([mockNewsItem]) // first page load
      .mockResolvedValueOnce(failure); // next page load

    const {result} = renderHook(() => useSearchState());

    await act(async () => {
      await result.current.loadCurrentPage(); // page 0
      await result.current.loadNextPage(); // page 1
    });

    expect(result.current.data.length).toBe(1); // only from first page
    expect(result.current.nextPageError).toBeInstanceOf(FailureEntity);
    expect(result.current.firstPageError).toBeNull();
    expect(result.current.nextPageLoadng).toBe(false);
  });

  it('updates search query and reloads first page', async () => {
    (di.getNewsFromSearchQueryUseCase.call as jest.Mock).mockResolvedValue([
      mockNewsItem,
    ]);

    const {result} = renderHook(() => useSearchState());

    await act(async () => {
      await result.current.updateSearchQuery('new search');
    });

    expect(result.current.searchQuery).toBe('new search');
    expect(result.current.pageNumber).toBe(0);
    expect(result.current.data).toEqual([mockNewsItem]);
  });

  it('refreshes the screen and reloads first page', async () => {
    (di.getNewsFromSearchQueryUseCase.call as jest.Mock).mockResolvedValue([
      mockNewsItem,
    ]);

    const {result} = renderHook(() => useSearchState());

    await act(async () => {
      await result.current.loadCurrentPage();
      await result.current.refreshScreen();
    });

    expect(result.current.pageNumber).toBe(0);
    expect(result.current.data).toEqual([mockNewsItem]);
  });
});
