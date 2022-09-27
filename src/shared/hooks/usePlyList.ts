import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { filterAtom } from "store/Filter";

const baseURL= "https://youtube.googleapis.com/youtube/v3";

export function usePlayList() {
    const filters = useRecoilValue(filterAtom);

    const paramsFilter = {
        part: filters.part,
        q: filters.q,
        type: filters.type,
        key: filters.key,
    };

    const {...result} = useQuery(['chart-data',filters], async () => {
     return  await axios.get(`${baseURL}/search`,{params:paramsFilter})
      
    })
    return { ...result, playList: result.data?.data ?? [] }
}