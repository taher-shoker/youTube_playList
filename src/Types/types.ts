export interface PageInfo{
    totalResults:number,
    resultsPerPage:number
}
export interface Item {
    id:{
        kind:string,
        videoId:string,
    },
    snippet:Snippet
} 
export interface Snippet {
  
        publishedAt:string,
        channelId:string,
        title:string,
        description:string,
        channelTitle:string,
        thumbnails:{
            default:{
                url:string 
            }
            medium:{
                url:string
            }
        }
    
}
export interface ResponseType  {
    kind: string,
	pageInfo: PageInfo,
	items: string,
	
}

export interface Params {
    part: string,
    q: string,
    type:string,
    key:string
}
