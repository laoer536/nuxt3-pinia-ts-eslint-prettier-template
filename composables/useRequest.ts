import { useFetch } from '#app'
import type { SearchParameters } from 'ofetch'
import type { Ref } from 'vue'
interface BaseRes<T> {
  code: number
  data: T
  msg: string
}

export async function fetchGet<ResT, ReqT extends SearchParameters = SearchParameters>(url: string, data?: ReqT) {
  const useFetchRes = await useFetch<BaseRes<ResT>>(url, { method: 'GET', query: data })
  const allData = useFetchRes.data as Ref<BaseRes<ResT>>
  const resData = ref(allData.value.data)
  const { pending, refresh, error, execute } = useFetchRes
  return { pending, refresh, error, execute, data: resData }
}

export function fetchGetAll<ResT, ReqT extends SearchParameters = SearchParameters>(url: string, data?: ReqT) {
  return useFetch<BaseRes<ResT>>(url, { method: 'GET', query: data })
}

export async function fetchPost<ResT, ReqT extends SearchParameters = SearchParameters>(url: string, data?: ReqT) {
  const useFetchRes = await useFetch<BaseRes<ResT>>(url, { method: 'POST', body: data })
  const allData = useFetchRes.data as Ref<BaseRes<ResT>>
  const resData = ref(allData.value.data)
  const { pending, refresh, error, execute } = useFetchRes
  return { pending, refresh, error, execute, data: resData }
}

export function fetchPostAll<ResT, ReqT extends SearchParameters = SearchParameters>(url: string, data?: ReqT) {
  return useFetch<BaseRes<ResT>>(url, { method: 'POST', body: data })
}
