// export type CardeSideType = "text" | "image";

// interface CardSide {
//   type: CardeSideType;
//   value: string;
// }

// export interface CardData {
//   name?: string;
//   createdAt?: string;
//   sideA: CardSide;
//   sideB: CardSide;
// }

// export interface Card extends CardData {
//   id: string;
// }

// export interface CreateStudySessionData extends Omit<StudySessionData, "completed"> {
//     collectionId: string;
//   }
  
//   export type FormStudySessionData = Omit<CreateStudySessionData, "date">;

export interface PublicationData {
    id: string
    avatar: string
    userName: string
    img: string
    content: string
    createdAt: Date
    creatorId: string
    saves: Array<String>
}

export interface Publication extends PublicationData {
    userId: string;
}