import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvSeries } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useTVSeries = () => {
  const dispatch = useDispatch();

  const tvSeries = useSelector((store) => store.movies.tvSeries);

  const getTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvSeries(json.results));
    // console.log(json.results);
  };
  useEffect(() => {
    if (!tvSeries)
    getTvSeries();
  }, []);
};
export default useTVSeries;
