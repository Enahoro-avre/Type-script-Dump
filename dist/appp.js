"use strict";
// // // class Department {
// // //     public name: string;
// // //     private readonly age: number
// // //     private employees: string[] = []
// // //     constructor(n: string , n1: number ) {
// // //         this.name = n;
// // //         this.age = n1
// // // }
// // //     describe(this: Department) {
// // //         console.log('Department: ' + this.name +  " and " + this.age , this.employees);
// // // }
// // //     addEmployees(employee: string) {
// // //         this.employees.push(employee);
// // // }
// // //     printEmployeeInformation() {
// // //         console.log('Length of employees: ' + this.employees.length);
// // //         console.log('Name of employess: ' + this.employees);
// // // }
// // //     }
// // // const accounting = new Department('Accounting' , 21 );
// // // accounting.describe();
// // // accounting.addEmployees('Stacy')
// // // accounting.addEmployees('Durber')
// // // accounting.printEmployeeInformation()
// // // accounting
// // // // accounting.employees[2] = 'Anna'; // This won't work because its a private class
// // // accounting.printEmployeeInformation()
// // // // const accountingCopy = { name: 'DUMMY', age: 32 ,  describe: accounting.describe };
// // // // accountingCopy.describe();
// // // Inheritance
// // class Department {
// //     private employees: string[] = []
// //     constructor(public name: string , private readonly age: number ) {
// // }
// //     describe(this: Department) {
// //         console.log('Department: ' + this.name +  " and " + this.age , this.employees);
// // }
// //     addEmployees(employee: string) {
// //         this.employees.push(employee);
// // }
// //     printEmployeeInformation() {
// //         console.log('Length of employees: ' + this.employees.length);
// //         console.log('Name of employess: ' + this.employees);
// // }
// //     }
// // const accounting = new Department('Accounting' , 21 );
// // // accounting.describe();
// // // accounting.addEmployees('Stacy')
// // // accounting.addEmployees('Durber')
// // // accounting.printEmployeeInformation()
// // // accounting
// // // accounting.employees[2] = 'Anna'; // This won't work because its a private class
// // accounting.printEmployeeInformation()
// // class IT extends Department {
// //     admins: string[]
// //     constructor(name: string , admins: string[]) {
// //         super(name, 26)
// //         this.admins = admins
// //     }
// // }
// // class AccountingDepartment extends Department {
// //     constructor(name: string , private reports: string[]) {
// //         super(name , 67)
// //     }
// //     addReport(text: string) {
// //         this.reports.push(text)
// //     }
// //     printReport() {
// //         console.log(this.reports)
// //     }
// // }
// // const it = new IT('cheryl', ['jigunu'])
// // it.addEmployees('loren tanner')
// // it.printEmployeeInformation()
// // console.log(it)
// // const account = new AccountingDepartment('george', ['morgan']) 
// // account.addEmployees('steve')
// // account.addReport('The case between jackson and kindness has being settled ')
// // account.printEmployeeInformation()
// // console.log(account)
// // getters and setters
// class Department {
//   // private readonly id: string;
//   // private name: string;
//   protected employees: string[] = [];
//   constructor(private readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//   }
//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }
//   addEmployee(employee: string) {
//     // validation etc
//     // this.id = 'd2';
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, 'IT');
//     this.admins = admins;
//   }
// }
// class AccountingDepartment extends Department {
//   private lastReport: string;
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('No report found.');
//   }
//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please pass in a valid value!');
//     }
//     this.addReport(value);
//   }
//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//     this.lastReport = reports[0];
//   }
//   addEmployee(name: string) {
//     if (name === 'Max') {
//       return;
//     }
//     this.employees.push(name);
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }
// const it = new ITDepartment('d1', ['Max']);
// it.addEmployee('Max');
// it.addEmployee('Manu');
// // it.employees[2] = 'Anna';
// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();
// console.log(it);
// const accounting = new AccountingDepartment('d2', []);
// accounting.mostRecentReport = 'Year End Report';
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport);
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();
// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// // accountingCopy.describe();
