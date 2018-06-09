import { Injectable } from "@angular/core";
import { Deal } from "../types/deals.type";

@Injectable()
export class DealEditorService {
    public static currentDealBeingEditied: Deal;
}