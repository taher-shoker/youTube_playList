import {atom} from "recoil";

export const filterAtom = atom({
    key: 'filters',
    default: {
        part: "snippet",
        q: '',
        type:'channel,video,playlist',
        key: 'AIzaSyC8_CkmsuyqyAWdZhz8au42kTkfcJuHWbk'
    }
})