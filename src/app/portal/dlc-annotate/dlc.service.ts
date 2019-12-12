import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PostFramesRequest } from './model/post-frames-request.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DlcService {

    constructor(private http: HttpClient) {
        
    }

    getFrames(projectId: string) {
        //return this.http.get('/dlc/project/' + projectId);
        return this.http.get('/dlc/project/c41f25f1-4dbf-4ec3-a92c-8e7142764b64');
    }

    postFrames(request: PostFramesRequest) {
        return this.http.post('/dlc/project/c41f25f1-4dbf-4ec3-a92c-8e7142764b64/frames', request);
    }
}
