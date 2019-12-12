import { AnnotationLabel } from './annotation-label.model';

export interface Annotation {
    x: number;
    y: number;
    label: AnnotationLabel;
}