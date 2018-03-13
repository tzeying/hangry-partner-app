import { Injectable } from '@angular/core'; 
// import * as mockOrderData from '../pages/mock-order-data.json'; 
 
@Injectable() 
export class OrdersProvider { 
 
  private orders: any[] = [
      {
          "id": "1",
          "timeRemaining": 10,
          "customerName": "Jerome Tay",
          "status": "pickup", 
          "price": 40, 
          "totalItems": 1,
          "code": 123
      },
      {
          "id": "2",
          "timeRemaining": 32,
          "customerName": "Bertie Cohen",
          "status": "preparing", 
          "price": 28, 
          "totalItems": 3
      },
      {
          "id": "3",
          "timeRemaining": 40,
          "customerName": "Andy Lee",
          "status": "queued", 
          "price": 13, 
          "totalItems": 1
      },
      {
          "id": "4",
          "timeRemaining": 55,
          "customerName": "Sammy Sun",
          "status": "pending", 
          "price": 90, 
          "totalItems": 10
      },
      {
          "id": "5",
          "timeRemaining": 60,
          "customerName": "Rachel Lee",
          "status": "pending", 
          "price": 65, 
          "totalItems": 1
      },
      {
          "id": "6",
          "timeRemaining": 50,
          "customerName": "Jonathan Chee",
          "status": "queued", 
          "price": 19, 
          "totalItems": 1
      }
  ]; 
 
  getOrderBySecureCode(code){ 
    return this.orders.find(order => order.code == code); 
  } 
 
  getOrderById(id){ 
    return this.orders.find(order => order.id == id); 
  } 
 
  getOrdersByStatus(status){ 
    return this.orders.filter(order => order.status == status); 
  } 
 
  getOrders(){ 
    return this.orders; 
  } 

  updateOrderStatus(id, newStatus){
    let order = this.orders.find(order => order.id == id);
    if (order == null || order == undefined) return; 
    order.status = newStatus;
  }
} 