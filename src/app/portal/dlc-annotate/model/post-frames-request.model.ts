import { AnnotatedFrame } from './annotated-frame.model';

export class PostFramesRequest {
    frames: AnnotatedFrame[];
    userId: string;
    projectId: string;

    constructor() {
        
    }
}