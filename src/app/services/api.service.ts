import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
    OpenOders: any[] = [
      { ordernumber: 14,cashier: {id: 1, name: 'John Doe', address: '012 Durban, KZN', role: 'Manager', period: '2 Years', contactNumber: '0791234567', email: 'JohnDoe@gmail.com' } ,price: 200, units: 'x3',id: 2, time: '14:24',status: 'open', },
      { ordernumber: 13, cashier: { id: 3, name: 'Confort james', address: '012 Durban, KZN', role: 'Admin',  period: '6 Years', contactNumber: '0791234567',  email: 'Confort james@gmail.com' },price: 300, units: 'x1',id: 2, time: '14:23',status: 'open', },
      { ordernumber: 12, cashier: { id: 2, name: 'John Wick', address: '012 Durban, KZN', role: 'cashier', period: '1 Years', contactNumber: '0791234567', email: 'JohnWick@gmail.com' } ,price: 410, units: 'x4',id: 2, time: '14:22',status: 'open', },
      { ordernumber: 11, cashier: { id: 3, name: 'Confort james', address: '012 Durban, KZN', role: 'Admin',  period: '6 Years', contactNumber: '0791234567',  email: 'Confort james@gmail.com' },price: 210, units: 'x2',id: 2, time: '14:22',status: 'open', },
      { ordernumber: 10, cashier: { id: 4, name: 'Tebza Doe', address: '012 Durban, KZN', role: 'Cashier',  period: '8 Years', contactNumber: '0791234567',  email: 'Tebza Doe@gmail.com' },price: 225, units: 'x1',id: 2, time: '14:21',status: 'open', },
      { ordernumber: 9, cashier: { id: 1, name: 'John Doe', address: '012 Durban, KZN', role: 'Manager', period: '2 Years', contactNumber: '0791234567', email: 'JohnDoe@gmail.com' },price: 325, units: 'x3',id: 2, time: '14:20',status: 'open', },
      { ordernumber: 8, cashier: { id: 4, name: 'Tebza Doe', address: '012 Durban, KZN', role: 'Cashier',  period: '8 Years', contactNumber: '0791234567',  email: 'Tebza Doe@gmail.com' },price: 530, units: 'x5',id: 2, time: '14:17',status: 'open', },
      { ordernumber: 7, cashier: { id: 3, name: 'Confort james', address: '012 Durban, KZN', role: 'Admin',  period: '6 Years', contactNumber: '0791234567',  email: 'Confort james@gmail.com' },price: 100, units: 'x2',id: 2, time: '14:16',status: 'open', },
      { ordernumber: 6, cashier: { id: 1, name: 'John Doe', address: '012 Durban, KZN', role: 'Manager', period: '2 Years', contactNumber: '0791234567', email: 'JohnDoe@gmail.com' },price: 70, units: 'x1',id: 2, time: '14:16',status: 'open', },
      { ordernumber: 5, cashier: { id: 4, name: 'Tebza Doe', address: '012 Durban, KZN', role: 'Cashier',  period: '8 Years', contactNumber: '0791234567',  email: 'Tebza Doe@gmail.com' } ,price: 150, units: 'x5',id: 2, time: '14:15',status: 'open', },
    ];
  Menu: any[] = [
    { id: 1, Name: 'Rock my Soul' , url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",price: 210, category: 'meal', tags:'breakfast',timeStamp: '14:24',status: 'Availble' },
    { id: 2, Name: 'Rock my Soul' , url: "https://hips.hearstapps.com/hmg-prod/images/701/scotch-recipes-to-try-1501252258.jpg?crop=0.636xw:1xh;center,top&resize=360:*",price: 150, category: 'alcohol', timeStamp: '14:24',status: 'Availble' },
    { id: 3, Name: 'Festive Feast' , url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",price: 190, category: 'meal', tags:'breakfast', timeStamp: '14:24',status: 'Availble' },
    { id: 4, Name: '1.5 Litre - No Sugar' , url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXO4ohPPKPnydqOR7x9rFA2nXYn1BSbh8sKl7UPp4QqEX_Ya15kHOqe2PP2X5-oLuffo4&usqp=CAU",price: 25, category: 'softdrinks', timeStamp: '14:24',status: 'Availble' },
    { id: 5, Name: 'Zinger Burger' , url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",price: 140, category: 'meal', tags:'breakfast', timeStamp: '14:24',status: 'Availble' },
    { id: 6, Name: 'Rock my Soul' , url: "https://hips.hearstapps.com/hmg-prod/images/701/scotch-recipes-to-try-1501252258.jpg?crop=0.636xw:1xh;center,top&resize=360:*",price: 40, category: 'alcohol', timeStamp: '14:24',status: 'Availble' },
    { id: 7, Name: 'Coke Studio Meal' , url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",price: 80, category: 'meal', tags:'breakfast', timeStamp: '14:24',status: 'Availble' },
    { id: 8, Name: 'Studio Meal' , url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",price: 90, category: 'meal', tags:'breakfast', timeStamp: '14:24',status: 'Availble' },
    { id: 9, Name: 'OREO KRUSHER' , url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXO4ohPPKPnydqOR7x9rFA2nXYn1BSbh8sKl7UPp4QqEX_Ya15kHOqe2PP2X5-oLuffo4&usqp=CAU",price: 28, category: 'softdrinks', tags:'breakfast', timeStamp: '14:24',status: 'Availble' },
    { id: 11, Name: 'Sprite' , url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXO4ohPPKPnydqOR7x9rFA2nXYn1BSbh8sKl7UPp4QqEX_Ya15kHOqe2PP2X5-oLuffo4&usqp=CAU",price: 35, category: 'softdrinks', tags:'breakfast', timeStamp: '14:24',status: 'Availble' },
    

  ];
  employees: any[] = [
    { id: 1, name: 'John Doe', address: '012 Durban, KZN', role: 'Manager', period: '2 Years', contactNumber: '0791234567', email: 'JohnDoe@gmail.com' },
    { id: 2, name: 'John Wick', address: '012 Durban, KZN', role: 'cashier', period: '1 Years', contactNumber: '0791234567', email: 'JohnWick@gmail.com' },
    { id: 3, name: 'Confort james', address: '012 Durban, KZN', role: 'Admin',  period: '6 Years', contactNumber: '0791234567',  email: 'Confort james@gmail.com' },
    { id: 4, name: 'Tebza Doe', address: '012 Durban, KZN', role: 'Cashier',  period: '8 Years', contactNumber: '0791234567',  email: 'Tebza Doe@gmail.com' },

    
    
  ]
}
