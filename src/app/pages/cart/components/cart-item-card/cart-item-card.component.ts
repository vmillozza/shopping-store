import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-item-card',
  standalone:true,
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent {
  @Input() item!: CartItem;
  @Output() itemQuantityUpdate = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<void>();

  onQuantityChange(quantity: number) {
    this.itemQuantityUpdate.emit(quantity);
  }

  onRemoveItem() {
    this.removeItem.emit();
  }
}
