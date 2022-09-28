import {atom} from "recoil";

export const filterAtom = atom({
    key: 'filters',
    default: {
        part: "snippet",
        q: '',
        type:'channel,video,playlist',
        key: '' // put your APIKey
    }
})