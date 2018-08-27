import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    templateUrl: './toggle-icon-button.component.html',
    selector: 'toggle-icon-button',
    styleUrls: ['/toggle-icon-button.component.scss']
})
export class ToggleIconButtonComponent {

    @Input() iconName: string;

    @Input() enabled: boolean;
    @Output() enabledChanged = new EventEmitter<boolean>();

    constructor() { }


}
