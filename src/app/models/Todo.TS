import { DatePipe } from '@angular/common';

export class Todo{
    id:number;
    title:string;
    date: DatePipe;
    created_at: string;
    completed:boolean;
}