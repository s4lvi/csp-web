import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dlc-annotate',
  templateUrl: './dlc-annotate.component.html',
  styleUrls: ['./dlc-annotate.component.css']
})
export class DlcAnnotateComponent implements OnInit {
  
  labels : AnnotationLabel[] = [{name: "head", color:"blue"},
                                {name: "eyes", color:"red"},
                                {name: "hand", color:"green"},
                                {name: "foot", color:"yellow"}];
                                
  annotatedFrames : AnnotatedFrame[] = [];


  constructor() {
  }

  ngOnInit() {  
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