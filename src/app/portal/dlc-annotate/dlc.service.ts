import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { PostFramesRequest } from './model/post-frames-request.model';
import { Observable } from 'rxjs';
import { AnnotatedFrame } from './dlc-annotate.component';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
 })
};

@Injectable()
export class DlcService {

    constructor(private http: HttpClient) {
        
    }

    getFrames(projectId: string): Observable<AnnotatedFrame[]> {
        //return this.http.get('/dlc/project/' + projectId);
        return this.http.get<AnnotatedFrame[]>('http://localhost:8080/dlc/project/c41f25f1-4dbf-4ec3-a92c-8e7142764b64/frames', httpOptions);
    }

    postFrames(request: PostFramesRequest): Observable<HttpResponse<String>> {
        return this.http.post<HttpResponse<String>>('http://localhost:8080/dlc/project/c41f25f1-4dbf-4ec3-a92c-8e7142764b64/frames', request, httpOptions);
    }
}
