import { Observable } from "rxjs";

export interface FirebaseCollectionService<T> {

    getAll(): Observable<T[]>
    get(id: string): Observable<T[]>
    getMulti(ids: string[]): Observable<T[]>

    set(model: T): Promise<void>
    setMulti(models: T[]): void

    delete(id: string): Promise<void>
}