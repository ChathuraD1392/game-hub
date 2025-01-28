import useData from "./useData";
import { Platform } from "./useGames";

const UsePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default UsePlatforms;