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

// Task 2: Creating a SalesRep Class 
class SalesRep {
    constructor(name) {
        this.name = name; // Assigning a sales  
        this.clients = []; // Assigning clients 
    }

    // Adding a method that adds a customer to the list
    addClient(customer) {
        this.clients.push(customer);
    }

    // Adding a method that finds a client by name and returns total spent
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0;
    }
}

// Example usage
const salesRep = new SalesRep("Rodrigo Rinaldi");
const customer2 = new Customer("Lary Smith", "Lary.smith@gmail.com");
salesRep.addClient(customer1);
salesRep.addClient(customer2);
console.log(`Sales Representative ${salesRep.name} has clients:`, salesRep.clients.map(client => client.name)); // Logging sales rep’s clients
console.log(`Total spent by ${customer2.name} - $${salesRep.getClientTotal("Lary Smith")}`); // Logging total spent for a specific client