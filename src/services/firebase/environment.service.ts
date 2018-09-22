import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseEnvironmentService {

    private currentEnvironment: FirebaseEnvironment = FirebaseEnvironment.Production;

    constructor() {
    }

    public setCurrentEnvironment(environment: FirebaseEnvironment): void {
        this.currentEnvironment = environment;
    }

    public getCurrentEnvironment(): FirebaseEnvironment {
        return this.currentEnvironment;
    }

    public getCurrentEnvironmentPrefix(): string {
        return FirebaseEnvironment[this.currentEnvironment].toLowerCase() + "\\";
    }

    public iterateEnvironment(): FirebaseEnvironment {
        if (this.currentEnvironment == FirebaseEnvironment.Production)
            this.currentEnvironment = FirebaseEnvironment.Demo
        else if (this.currentEnvironment == FirebaseEnvironment.Demo)
            this.currentEnvironment = FirebaseEnvironment.Development
        else if (this.currentEnvironment == FirebaseEnvironment.Development)
            this.currentEnvironment = FirebaseEnvironment.Production;

        return this.currentEnvironment;
    }
}

export enum FirebaseEnvironment {
    Demo,
    Development,
    Production,
}