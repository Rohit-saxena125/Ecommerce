const cart = {
    items: [],
  
    addItem: function(item) {
      this.items.push(item);
    },
  
    removeItem: function(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
  
    updateQuantity: function(itemId, quantity) {
      const item = this.items.find(item => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
  
    getSubtotal: function() {
      return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  
    getTax: function(taxRate) {
      return this.getSubtotal() * (taxRate / 100);
    },
  
    getTotal: function(taxRate) {
      return this.getSubtotal() + this.getTax(taxRate);
    }
  };
  
  module.exports = cart;
  