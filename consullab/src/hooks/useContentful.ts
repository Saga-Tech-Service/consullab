// lib/useContentful.ts
import useSWR from 'swr';
import axiosClient from '@/lib/axiosClient';
import { ContentfulResponse, ContentfulItem } from '@/types/typesContentFullType';

const fetcher = <T>(url: string) =>
  axiosClient.get<ContentfulResponse<T>>(url).then((res) => res.data);

export const useContentful = <T>(contentType: string,locale: string) => {
  const { data, error, isLoading } = useSWR<ContentfulResponse<T>>(
    `/entries?content_type=${contentType}&locale=${locale}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
};
