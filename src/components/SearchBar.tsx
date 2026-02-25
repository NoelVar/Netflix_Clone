import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import MOVIE_DATA from '../data/mockdata.json'
import type { Movie } from '../types';
import { debounce } from '../utility/debounce';


export default function SearchBar() {

    const [showSearch, setShowSearch] = useState(false);

    const searchQuery = (query: string) => {
        const results = MOVIE_DATA.results.filter((movie: Movie) =>
            movie.name.toLowerCase().includes(query.toLowerCase())
        );
        return results;
    }

    //NOTE: useMemo ensures the program always uses the same debounced function instance
    const debounceSearch =  useMemo(
        // () returns a debounced function
        () => debounce((query: string) => {
            const results = searchQuery(query);
            console.log(results);
        }, 500),
        [] // never recomputes
    );

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event?.target.value;
        debounceSearch(query)
    }

    return (
        <div className='flex item-center gap-2'>
            {showSearch &&
                <input 
                    type='text' 
                    placeholder='Search'
                    className='px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600'
                    onChange={handleQueryChange}
                    onBlur={() => setShowSearch(false)}
                />
            }

            <button onClick={() => setShowSearch(true)}>
                <Search />
            </button>
        </div>
    )
}