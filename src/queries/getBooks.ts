import { QueryFunctionContext, useQuery } from 'react-query';
import api from '../services/api';
import { BooksModel } from '../interfaces/books';

async function getBooks(ctx: QueryFunctionContext) {
  const [, search] = ctx.queryKey;
  const { data } = await api.get<BooksModel>(
    `/volumes?q=${search}&startIndex=0&maxResults=40`);
  return data;
}

export default function useFetchBooks(search: string | null) {
  return useQuery(['books', search], getBooks, {
    refetchOnWindowFocus: false,
  });
}
