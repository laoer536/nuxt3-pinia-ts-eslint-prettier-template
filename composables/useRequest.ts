import { useFetch } from '#app'
import type { SearchParameters, FetchOptions } from 'ofetch'
import type { Ref } from 'vue'
interface BaseRes<T> {
  code: number
  data: T
  msg: string
}

export async function fetchGet<ResT, ReqT extends SearchParameters = SearchParameters>(
  url: string,
  data?: ReqT,
  other?: Omit<FetchOptions, 'query'>
) {
  const useFetchRes = await useFetch<BaseRes<ResT>>(url, { method: 'GET', query: data, ...other })
  const allData = useFetchRes.data as Ref<BaseRes<ResT>>
  const resData = ref(allData.value.data)
  const { pending, refresh, error, execute } = useFetchRes
  return { pending, refresh, error, execute, data: resData }
}

export async function fetchGetAll<ResT, ReqT extends SearchParameters = SearchParameters>(
  url: string,
  data?: ReqT,
  other?: Omit<FetchOptions, 'query'>
) {
  const useFetchRes = await useFetch<BaseRes<ResT>>(url, { method: 'GET', query: data, ...other })
  const allData = useFetchRes.data as Ref<BaseRes<ResT>>
  const { pending, refresh, error, execute } = useFetchRes
  return { pending, refresh, error, execute, data: allData }
}

export async function fetchPost<ResT, ReqT extends SearchParameters = SearchParameters>(
  url: string,
  data?: ReqT,
  other?: Omit<FetchOptions, 'body'>
) {
  const useFetchRes = await useFetch<BaseRes<ResT>>(url, { method: 'POST', body: data, ...other })
  const allData = useFetchRes.data as Ref<BaseRes<ResT>>
  const resData = ref(allData.value.data)
  const { pending, refresh, error, execute } = useFetchRes
  return { pending, refresh, error, execute, data: resData }
}

export async function fetchPostAll<ResT, ReqT extends SearchParameters = SearchParameters>(
  url: string,
  data?: ReqT,
  other?: Omit<FetchOptions, 'body'>
) {
  const useFetchRes = await useFetch<BaseRes<ResT>>(url, { method: 'POST', body: data, ...other })
  const allData = useFetchRes.data as Ref<BaseRes<ResT>>
  const { pending, refresh, error, execute } = useFetchRes
  return { pending, refresh, error, execute, data: allData }
}
