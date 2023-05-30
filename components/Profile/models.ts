import { PublicationData } from "../Publications/models"
import { StoryData } from "../Stories/models"

export interface ProfileContent {
    userPublications: Array<PublicationData>
    userStories: Array<StoryData> 
}