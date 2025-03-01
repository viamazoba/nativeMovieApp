import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'cd860cd2cfd32023cd3c6e338bdfc313',
        language: 'es',
    },
});
