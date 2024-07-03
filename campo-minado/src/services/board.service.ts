import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private jsonURL = 'assets/board-data.json';
  private dataSubject = new BehaviorSubject<any>(null);

  private cellData = new BehaviorSubject("")
  currentCellData = this.cellData.asObservable();

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData(){
    this.http.get<any>(this.jsonURL).subscribe(data => {
      this.dataSubject.next(data);
    });
  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  setCellData(data: any) {
    this.cellData.next(data);
  }
}
