import { api } from './api'
import { useQuery } from "@tanstack/react-query"

export const GetMethod = <T>(endpoint: string, id?: string | string[] | undefined, refetch?: boolean) => {
  let url = id ? `${endpoint}/${id}` : `${endpoint}`
  
  const { data, error, isSuccess, isLoading, isError } = useQuery({
    queryKey: [endpoint, id, refetch],
    queryFn: () => api.getResource<T>(url),
    enabled: Boolean(id) || !id,
  });

  return { data, isLoading, error, isError, isSuccess }
}
