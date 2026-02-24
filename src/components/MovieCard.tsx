import { Card } from "@/components/ui/card";
const TMBD_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }) => {
    return (
        <Card className="movie-image group relative overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-xl outline-blue-200 p-0 border-0 w-[7rem] h-[9.8rem] lg:w-[11.9rem] lg:h-[16.6rem] rounded-sm">
            <img 
                src={movie?.poster_path ? TMBD_IMAGES_ASSET_URL + movie?.poster_path : "/placeholder.svg"}
                alt={movie?.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10"
            />
        </Card>
    )
}

export default MovieCard;