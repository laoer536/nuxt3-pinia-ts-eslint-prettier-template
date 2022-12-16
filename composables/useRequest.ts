import { useFetch } from '#app'
import type { SearchParameters } from 'ofetch'
import type { Ref } from 'vue'
import { shallowRef } from 'vue'
interface BaseRes<T> {
  code: number
  data: T
  msg: string
}

export async function fetchGet<ResT, ReqT extends SearchParameters = SearchParameters>(
  url: string,
  data?: ReqT,
  needAll?: boolean
) {
  const useFetchRes = await useFetch<BaseRes<ResT>>(url, { query: data })
  const allData = useFetchRes.data as Ref<BaseRes<ResT>>
  const resData = shallowRef(allData.value.data)
  const { pending, refresh, error, execute } = useFetchRes
  if (needAll) return { pending, refresh, error, execute, data: allData }
  else return { pending, refresh, error, execute, data: resData }
}
