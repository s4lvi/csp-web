import { Annotation } from './annotation.model';

export interface AnnotatedFrame {
    image: string;
    annotations: Annotation[];
    projectId: string;
}