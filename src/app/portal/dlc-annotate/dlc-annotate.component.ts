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
  private currentFrame : number = 0;

  constructor() {
  }

  ngAfterViewInit() { 
    this.context = (this.canvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.currentLabel = this.labels.length > 0 ? this.labels[0] : new AnnotationLabel("defaultLabel", "red"); 
    if (this.annotatedFrames.length == 0) {
      var imageUrl1 = "assets/cuttlefish.jpg";
      var img1 = new Image(1280, 720);
      img1.setAttribute('src', imageUrl1);
      var imageUrl2 = "assets/cuttlefish2.jpg";
      var img2 = new Image(1280, 720);
      img2.setAttribute('src', imageUrl2);
      this.annotatedFrames.push(new AnnotatedFrame(
        img1,
        []
      ));
      this.annotatedFrames.push(new AnnotatedFrame(
        img2,
        []
      ));
    }
  }

  loadFrames() {

  }

  annotate(e) {
    this.annotatedFrames[this.currentFrame].annotations.push(new Annotation(e.pageX, e.pageY, this.currentLabel));
    this.refreshImage();
  }

  refreshImage() {
    this.context.drawImage(this.annotatedFrames[this.currentFrame].image,0,0);
    this.annotatedFrames[this.currentFrame].annotations.forEach(annotation => {
      this.context.fillStyle = annotation.label.color;
      this.context.beginPath();
      this.context.arc(annotation.x, annotation.y, 5, 0, 2 * Math.PI);
      this.context.fill();
    });
  }

  nextFrame() {
    this.currentFrame + 1 >= this.annotatedFrames.length ? this.currentFrame = 0 : this.currentFrame = this.currentFrame + 1;
    this.refreshImage();
  }

  prevFrame() {
    this.currentFrame <= 0 ? this.currentFrame = this.annotatedFrames.length - 1 : this.currentFrame = this.currentFrame - 1;
    this.refreshImage();
  }

  erase() {
    this.annotatedFrames[this.currentFrame].annotations = [];
    this.refreshImage();
  }

  save() {

  }

  selectLabel(name: string) {
    this.labels.forEach(label => {
      if (label.name == name) {this.currentLabel = label;}
    });
  }

}

class AnnotationLabel {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

class AnnotatedFrame {
  image: HTMLImageElement;
  annotations: Annotation[];

  constructor(image: HTMLImageElement, annotations: Annotation[]) {
    this.image = image;
    this.annotations = annotations;
  }
}

class Annotation {
  x: number;
  y: number;
  label: AnnotationLabel;

  constructor(x: number, y: number, label: AnnotationLabel) {
    this.x = x;
    this.y = y;
    this.label = label;
  }
}