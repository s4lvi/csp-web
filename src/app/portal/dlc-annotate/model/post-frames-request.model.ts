import { AnnotatedFrame } from '../dlc-annotate.component';


export interface PostFramesRequest {
    frames: AnnotatedFrame[];
    userId: string;
    projectId: string;
}