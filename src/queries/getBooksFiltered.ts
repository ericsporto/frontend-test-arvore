import { QueryFunctionContext, useQuery } from 'react-query';
import api from '../services/api';
import { BooksModel } from '../types/books';

export async function getBooksFiltered(ctx: QueryFunctionContext) {
  const [, search, indexItem] = ctx.queryKey;
  if (!search) return;
  const { data } = await api.get<BooksModel>(
    `/volumes?q=${search}&startIndex=${indexItem}&maxResults=10`
  );
  return data;
}

export default function useFetchBooksFiltered(
  search: string | null,
  indexItem: number | null
) {
  return useQuery(['filtered', search, indexItem], getBooksFiltered, {
    refetchOnWindowFocus: false,
  });
}
