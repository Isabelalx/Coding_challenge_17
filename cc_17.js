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

// Task 3: Extended VIPCustomer class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email); 
        this.vipLevel = vipLevel; // Assigning vip level to customer
    }
    
    // Overriding getTotalSpent to apply 10% loyalty bonus
    getTotalSpent() {
        const total = super.getTotalSpent();
        return total * 1.1; // 10% bonus
    }
}

// Example usage 
const vipCustomer1 = new VIPCustomer("Julia Ramos", "Juliaramos@gmail.com", "Gold");
vipCustomer1.addPurchase(500);
console.log(`VIP Customer total spent - $${vipCustomer1.getTotalSpent()}`);

// Task 4: Build a Client Report System
 // Storing customers (regular + VIP) 
 const customers = [
    customer1,
    customer2,
    vipCustomer1
];

// Using .reduce() to calculate total revenue from all customers
const totalRevenue = customers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);
console.log(`Total Revenue = $${totalRevenue}`); // Logging total revenue

// Using .filter() to find customers who spent over $500
const highSpenders = customers.filter(customer => customer.getTotalSpent() > 500);
console.log(`High Spending Customers: ${highSpenders.map(c => c.name).join(", ")}`); // Logging high-spending customers

// Using .map() to create an array of customer names and total spent
const customerSummary = customers.map(customer => ({ name: customer.name, totalSpent: customer.getTotalSpent() }));
console.log("Customer Summary:", customerSummary); // Logging customer summary