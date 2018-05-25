export class Office {

    addressLine1: string;
    addressLine2: string;
    country: string;
    officeCode: string;
    phone: string;
    postalCode: string;
    stateName: string;
    territory: string;
    employees: Employee[] = [];
}

export class Customer {
    addressLine1: string;
    addressLine2: string;
    city: string;
    contactFirstName: string;
    contactLastName: string;
    country: string;
    creditLimit: number;
    customerName: string;
    customerNumber: number;
    phone: string;
    postalCode: string;
    stateName: string;

}

export interface CustomersForEmployees {
    id: any;
    customers: Customer[]
}


export class Employee {

    email: string;
    employeeNumber: number;
    extension: string;
    firstName: string;
    jobTitle: string;
    lastName: string;
    reportsTo: number;



}
