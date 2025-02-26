import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { IMovieDBResponses } from '../../../infrastructure/interfaces/movie-db.responses';
import type { Movie } from '../../entities/movie.entity';


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const nowPlaying = await fetcher.get<IMovieDBResponses>('/now_playing');
        console.log(nowPlaying);
        return [];

    } catch (error) {
        throw new Error('Error fetching movies - NowPlaying');
    }
};
