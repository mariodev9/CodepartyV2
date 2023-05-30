export interface StoryData {
    id: string
    img: string
    createAt: number 
    userName: string
    creatorId: string
    avatar: string
}


export interface Stories  {
    avatar: string
    creatorId: string
    stories: Array<StoryData>
}

export interface StoryFilterByUser  {
    avatar: string
    stories: Array<StoryData>
}


