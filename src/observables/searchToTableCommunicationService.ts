import { Subject, Observable } from "rxjs";

export class SearchToTableCommunicationService{

    private subject=new Subject<boolean>();
    subjectObservable=this.subject.asObservable();

    publish(isInStockChecked:boolean){
        this.subject.next(isInStockChecked);
    }

    subscribeForStreamChange():Observable<boolean>{
        return this.subjectObservable;
    }
}