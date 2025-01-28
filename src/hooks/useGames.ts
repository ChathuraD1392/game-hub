import { GameQuery } from "../App";
import useData from "./useData";


export interface Platform{
    id:number;
    name :string;
    slug : string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    platforms: {platform:Platform}[]
    metacritic:number;
    rating_top:number

  }
  
  const useGames = (selectedGameQuery: GameQuery) => useData<Game>('/games', 
    {params : {genres:selectedGameQuery.genre?.id 
        ,platforms: selectedGameQuery.platform?.id
        ,ordering:selectedGameQuery.sortOrder
        ,search:selectedGameQuery.search}},
    [selectedGameQuery.genre?.id
        ,selectedGameQuery.platform?.id
        ,selectedGameQuery.sortOrder
        ,selectedGameQuery.search])



  export default useGames;