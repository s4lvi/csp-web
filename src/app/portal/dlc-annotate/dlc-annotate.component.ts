import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dlc-annotate',
  templateUrl: './dlc-annotate.component.html',
  styleUrls: ['./dlc-annotate.component.css']
})
export class DlcAnnotateComponent implements AfterViewInit {
  
  @ViewChild('canvas', {
    static: false
  }) canvasRef: ElementRef;
  public context: CanvasRenderingContext2D;

  private labels : AnnotationLabel[] = [{name: "head", color:"blue"},
                                {name: "eyes", color:"red"},
                                {name: "hand", color:"green"},
                                {name: "foot", color:"yellow"}];
                                
  private annotatedFrames : AnnotatedFrame[] = [];

  private currentLabel : AnnotationLabel;

  constructor() {
  }

  ngAfterViewInit() { 
    this.context = (this.canvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.currentLabel = this.labels.length > 0 ? this.labels[0] : {name: "label", color: "red"}; 
  }

  annotate(e) {
    console.log(e);

    this.context.fillStyle = "red";//this.currentLabel.color;
    this.context.beginPath();
    this.context.arc(e.screenX, e.screenY, 10, 0, 2 * Math.PI);
    this.context.fill();
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