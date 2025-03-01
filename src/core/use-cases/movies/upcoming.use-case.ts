import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import type { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';


export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return upcoming.results.map(result => MovieMapper.fromMovieResultToEntity(result));


    } catch (error) {
        throw new Error('Error fetching movies - upcoming');
    }
};
