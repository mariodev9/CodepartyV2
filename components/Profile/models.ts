import { PublicationData } from "../Publications/models"
import { StoryData } from "../Stories/models"

export interface ProfileContent {
    userPublications: Array<PublicationData>
    userStories: Array<StoryData> 
}

type tecnology = {
    name: string
    color: string
}

export interface ProfileData {
    avatar: string
    name: string
    description: string
    tecnologies: Array<tecnology>
    position: string
}