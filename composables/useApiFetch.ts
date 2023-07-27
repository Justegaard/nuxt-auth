import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T> (path: string, options: UseFetchOptions<T> = {}) {
    const siteUrl = process.env.SITE_URL
    
    let headers: any = {
        accept: "application/json",
        referer: siteUrl
    }

    const token = useCookie('XSRF-TOKEN')

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string
    }

    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(['cookie'])
        }
    }

    return useFetch(siteUrl+path, {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            ...headers,
            ...options?.headers
        }
    })
}