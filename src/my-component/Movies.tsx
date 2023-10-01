

interface movie {
    title: "hello",
    year: 2022,
    id: 1,
    image:"image",
    genre: "action",
    starRating: 5,
    runtime: 120,
    cast: "cast",
    rating: 5
}


//create interface Props with List and fn
interface Props {
    movie : movie,
    movies : [movie]
}

/*interface Props {

    movie : movie
}*/

//const dadjoke = "i used to be a banker, but then i lost interest "
//const dadJoke2 = ""

export default function Movies({movies}:Props) {

    console.log(movies)
    return (
        <div className="divide-y divide-slate-100">

            <h1 className={"text-5xl font-bold underline text-slate-900 text-center p-6 "}>Movies</h1>
            {/*<Nav>
                <NavItem href="/new" isActive>New Releases</NavItem>
                <NavItem href="/top">Top Rated</NavItem>
                <NavItem href="/picks">Vincent’s Picks</NavItem>
            </Nav>*/}
            <List>
                {movies.map((movie) => (

                    <ListItem key={movie.id} movie={movie}/>
                ))}
            </List>
        </div>
    )
}

export function List({ children }) {
    return (
        <ul className="divide-y divide-slate-100">
            {children}
        </ul>
    )
}



export function ListItem({movie}: Props) {
    return (
        <article className="flex items-start space-x-6 p-6">
            {/*<img src={movie.image} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />*/}
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20">{movie.title}</h2>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                        <dt className="text-sky-500">
                            <span className="sr-only">Star rating</span>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                        </dt>
                        <dd>{movie.starRating}</dd>
                    </div>
                    <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-1.5 ring-1 ring-slate-200 rounded">{movie.rating}</dd>
                    </div>
                    <div className="ml-2">
                        <dt className="sr-only">Year</dt>
                        <dd>{movie.year}</dd>
                    </div>
                    <div>
                        <dt className="sr-only">Genre</dt>
                        <dd className="flex items-center">
                            <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            {movie.genre}
                        </dd>
                    </div>
                    <div>
                        <dt className="sr-only">Runtime</dt>
                        <dd className="flex items-center">
                            <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            {movie.runtime}
                        </dd>
                    </div>
                    <div className="flex-none w-full mt-2 font-normal">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">{movie.cast}</dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}


//export default TW

