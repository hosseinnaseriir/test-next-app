export interface ActionData {
    text: string;
    action: string;
    destination: string;
  }
  
  export interface Action {
    type: string;
    data?: ActionData; 
  }
  
  export interface BackgroundMedia {
    type: string; 
    src: string;
  }
  
  export interface CardContent {
    type: string; 
    title: string;
    backgroundMedia: BackgroundMedia;
    Content: string;
    Subtitle?: string;
    action?: Action; 
  }
  
  export type CardContents = CardContent[];
  