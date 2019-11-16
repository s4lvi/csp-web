import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dlc-annotate',
  templateUrl: './dlc-annotate.component.html',
  styleUrls: ['./dlc-annotate.component.css']
})
export class DlcAnnotateComponent implements OnInit {
  
  @ViewChild('canvas') canvasRef: ElementRef;
  public context: CanvasRenderingContext2D;

  private labels : AnnotationLabel[] = [{name: "head", color:"blue"},
                                {name: "eyes", color:"red"},
                                {name: "hand", color:"green"},
                                {name: "foot", color:"yellow"}];
                                
  private annotatedFrames : AnnotatedFrame[] = [];

  private currentLabel : AnnotationLabel;

  constructor() {
  }

  ngOnInit() { 
    this.currentLabel = this.labels.length > 0 ? this.labels[0] : {name: "label", color: "red"}; 
  }

  annotate(e) {
    console.log(e);
  }

}

class AnnotationLabel {
  name: string;
  color: string;
}

class AnnotatedFrame {
  imageUrl: string;
  annotations: Annotation[];
}

class Annotation {
  x: number;
  y: number;
  label: AnnotationLabel;
}