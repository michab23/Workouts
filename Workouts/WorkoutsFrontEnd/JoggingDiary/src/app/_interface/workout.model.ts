import { Account } from './workout-details.model';
export interface Workout{
    id: string;
    date: Date;
    distanceInMeters: string;
    timeInSeconds: string;

    accounts?: Account
}