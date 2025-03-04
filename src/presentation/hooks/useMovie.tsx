/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as useCases from '../../core/use-cases/index';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import type { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>({} as FullMovie);

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async () => {
        setIsLoading(true);
        const fullMovie = await useCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        setMovie(fullMovie);
        setIsLoading(false);

    };

    return {
        isLoading,
        movie,
    };
};
