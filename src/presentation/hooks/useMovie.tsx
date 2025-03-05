/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as useCases from '../../core/use-cases/index';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import type { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>({} as FullMovie);
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async () => {
        setIsLoading(true);
        const fullMoviePromise = useCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        const castPromise = useCases.getMovieCastUseCase(movieDBFetcher, movieId);

        const [fullMovie, castResponse] = await Promise.all([fullMoviePromise, castPromise]);

        setMovie(fullMovie);
        setCast(castResponse);
        setIsLoading(false);

    };

    return {
        isLoading,
        movie,
        cast,
    };
};
