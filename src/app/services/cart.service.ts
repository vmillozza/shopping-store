/*
Questo codice definisce un servizio Angular chiamato `CartService`, che gestisce un carrello virtuale di elementi. Ecco una spiegazione dettagliata delle funzionalità del codice:

1. `cart = signal<Cart>({ ... })`: Qui viene definito un segnale (`signal`) che rappresenta lo stato del carrello. Il segnale è inizializzato con un oggetto di tipo `Cart` contenente un array vuoto di elementi, una conta e un totale pari a zero.

2. `addItem(item: CartItem) { ... }`: Questo metodo aggiunge un elemento al carrello. Se l'elemento esiste già nel carrello, ne aumenta la quantità; altrimenti, aggiunge un nuovo elemento al carrello.

3. `increaseItem(item: CartItem) { ... }`: Questo metodo aumenta la quantità di un elemento già presente nel carrello.

4. `decreaseItem(item: CartItem) { ... }`: Questo metodo diminuisce la quantità di un elemento nel carrello. Se la quantità dell'elemento diventa zero, l'elemento viene rimosso dal carrello.

5. `removeItem(item: CartItem) { ... }`: Questo metodo rimuove completamente un elemento dal carrello.

6. Le interfacce `CartItem` e `Cart` definiscono la struttura dei singoli elementi del carrello e del carrello stesso, rispettivamente.

Questo servizio fornisce quindi metodi per aggiungere, aumentare, diminuire e rimuovere elementi dal carrello, e tiene traccia dello stato del carrello tramite un segnale.
*/

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Cart>({
    items: [],
    count: 0,
    total: 0,
  });
  constructor() { }
  addItem(item: CartItem) {
    const itemObj = this.cart().items.find((t) => t.id === item.id);
    if (itemObj) {
      this.increaseItem(itemObj);
    } else {
      this.cart.update((prevCart) => ({
        ...prevCart,
        items: [...prevCart.items, item],
        count: prevCart.count + 1,
        total: prevCart.total + item.price,
      }));
    }
  }

  increaseItem(item: CartItem) {
    this.cart.update((prevCart) => {
      const newCart = {
        ...prevCart,
        items: [...prevCart.items],
      };
      const itemObj = newCart.items.find((t) => t.id === item.id);
      itemObj!.quantity = itemObj!.quantity + 1;
      newCart.count++;
      newCart.total += itemObj!.price;
      return newCart;
    });
  }

  decreaseItem(item: CartItem) {
    this.cart.update((prevCart) => {
      const newCart = {
        ...prevCart,
        items: [...prevCart.items],
      };
      const itemObj = newCart.items.find((t) => t.id === item.id);
      itemObj!.quantity = itemObj!.quantity - 1;
      newCart.count--;
      newCart.total -= itemObj!.price;
      return newCart;
    });
  }

  removeItem(item: CartItem) {
    this.cart.update((prevCart) => {
      const newCart = {
        ...prevCart,
        items: [...prevCart.items.filter((t) => t.id !== item.id)],
      };
      const itemObj = prevCart.items.find((t) => t.id === item.id);
      newCart.count -= itemObj!.quantity;
      newCart.total -= itemObj!.price * itemObj!.quantity;
      return newCart;
    });
  }
}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  count: number;
  total: number;
}
