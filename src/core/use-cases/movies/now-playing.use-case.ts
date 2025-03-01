import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { IMovieDBResponses } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const nowPlaying = await fetcher.get<IMovieDBResponses>('/now_playing');

        return nowPlaying.results.map(result => MovieMapper.fromMovieResultToEntity(result));


    } catch (error) {
        throw new Error('Error fetching movies - NowPlaying');
    }
};
