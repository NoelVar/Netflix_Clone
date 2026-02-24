import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='flex item-center gap-2'>
            {showSearch &&
                <input 
                    type='text' 
                    placeholder='Search'
                    className='px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600'
                />
            }

            <button onClick={() => setShowSearch(true)} onBlur={() => setShowSearch(false)}>
                <Search />
            </button>
        </div>
    )
}