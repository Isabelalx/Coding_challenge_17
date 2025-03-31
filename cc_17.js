// Task 1 
class Customer {
    constructor(name, email) {
        this.name = name; 
        this.email = email; 
        this.purchaseHistory = []; 
        console.log(`New customer created - Name: ${this.name}, Email: ${this.email}`); 
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`Purchase added - Amount: $${amount}`);  
    }
    getTotalSpent() {
        const total = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        console.log(`Total spent by ${this.name} - $${total}`); 
        return total;
    }
}

// Example usage
const customer1 = new Customer("Isabela Xavier", "Isabelalopesxavier@gmail.com");
customer1.addPurchase(50);
customer1.addPurchase(30);
customer1.getTotalSpent();