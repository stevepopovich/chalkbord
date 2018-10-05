import { Component } from '@angular/core';
import { ConsumerComponent } from '../consumer/consumer.component';

@Component({
    templateUrl: './consumer-container.component.html',
    selector: 'consumer-container',
})
export class ConsumerContainerComponent {
    public root: any = ConsumerComponent;
}