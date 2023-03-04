import { QueryFunctionContext, useInfiniteQuery, useQuery } from 'react-query';
import api from '../services/api';
import { BooksModel } from '../interfaces/books';

async function getBooksFiltered(ctx: QueryFunctionContext) {
  const [, search, indexItem] = ctx.queryKey;
  if(!search) return
  const { data } = await api.get<BooksModel>(
    `/volumes?q=${search}&startIndex=${indexItem}&maxResults=20`
  );
  return data;
}

export default function useFetchBooksFiltered(search: string | null, indexItem: 0) {
  return useQuery(['filtered', search, indexItem], getBooksFiltered);
}
