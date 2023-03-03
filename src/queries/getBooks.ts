import { QueryFunctionContext, useQuery } from 'react-query';
import api from '../services/api';
import { BooksModel } from '../interfaces/books';

async function getUsers(ctx: QueryFunctionContext) {
  const [, search] = ctx.queryKey;
  const { data } = await api.get<BooksModel>(
    `/volumes?q=${search}&startIndex=0&maxResults=10`,
    {
      params: {
        search: search ? search : "Query",
      },
    }
  );
  return data;
}

export default function useFetchBooks(search: string | null) {
  return useQuery(['books', search], getUsers, {
    keepPreviousData: true,
  });
}
