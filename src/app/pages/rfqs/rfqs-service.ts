import { Injectable } from '@angular/core';

export class RfqEmployee {
    _id: string;
    start_date: string;
    end_date: string;
    location: string;
    category: string;
    notes: string;
    status: string;
    
}

export class RfqStatus {
    _id: string;
    title: string;
}

let employees: RfqEmployee[] = [{
    "_id": '1',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '2',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '3',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '4',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '5',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '6',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '7',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '8',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '9',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}, {
    "_id": '10',
    "start_date": "2020/01/15",
    "end_date": "2020/02/15",
    "location": "Thessaloniki",
    "category": "Mini",
    "notes": "Diesel",
    "status": "Pending"
}];

let states: RfqStatus[] = [{
    "_id": '1',
    "title": "Pending"
}, {
    "_id": '2',
    "title": "Confirmed"
}, {
    "_id": '3',
    "title": "Completed"
}
];

@Injectable()
export class RfqService {
    getEmployees() {
        return employees;
    }
    getStates() {
        return states;
    }
}