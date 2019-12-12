import { Annotation } from './annotation.model';

export class AnnotatedFrame {
    image: string;
    annotations: Annotation[];
    projectId: string;

    constructor() {

    }
}