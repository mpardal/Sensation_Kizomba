import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase } from '@mui/material';

function Search() {
  return (
    <div className="relative hidden w-1/2 rounded bg-gray-600 transition-colors hover:bg-gray-700 sm:ml-auto sm:flex sm:w-auto">
      <div className="pointer-events-none absolute flex h-full items-center justify-center py-0 px-4">
        <SearchIcon />
      </div>
      <InputBase
        classes={{
          input:
            'py-2 pr-2 pl-[calc(1em+theme(space.8))] text-yellow-300 transition-[width] w-full sm:w-[15ch] sm:focus:w-[20ch]',
        }}
        inputProps={{
          'aria-label': 'search',
        }}
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
