import { Observable } from "rxjs";

export interface FirebaseCollectionService<T> {

    get(): Observable<T[]>
    get(id: string): Observable<T[]>
    get(ids: string[]): Observable<T[]>

    set(model: T): Promise<void>
    set(models: T[]): void

    delete(id: string): Promise<void>
}