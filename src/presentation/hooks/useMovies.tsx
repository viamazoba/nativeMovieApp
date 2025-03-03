import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as useCases from '../../core/use-cases/index';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const nowPlayingPromise = useCases.moviesNowPlayingUseCase(movieDBFetcher);
        const upcomingPromise = useCases.moviesUpcomingUseCase(movieDBFetcher);
        const topRatedPromise = useCases.moviesTopRatedUseCase(movieDBFetcher);
        const popularPromise = useCases.moviesPopularUseCase(movieDBFetcher);

        const [
            nowPlayingMovies,
            upcomingMovies,
            topRatedMovies,
            popularMovies,
        ] = await Promise.all([
            nowPlayingPromise,
            upcomingPromise,
            topRatedPromise,
            popularPromise,
        ]);

        setNowPlaying(nowPlayingMovies);
        setUpcoming(upcomingMovies);
        setTopRated(topRatedMovies);
        setPopular(popularMovies);

        setIsLoading(false);
    };

    return {
        isLoading,
        nowPlaying,
        upcoming,
        topRated,
        popular,

        // Methods
        popularNextPage: async () => {
            popularPageNumber++;
            const popularMovies = await useCases.moviesPopularUseCase(movieDBFetcher, {
                page: popularPageNumber,
            });

            setPopular(prev => [...prev, ...popularMovies]);
        },
    };
};
