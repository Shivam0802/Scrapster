import asyncHandler from 'express-async-handler';
import Customer from '../DatabaseModels/customerModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

var customer_ID;

// Login a customer
// GET /api/customers
// Public
const loginCustomer = asyncHandler(async (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
    let customer = await Customer.findOne({ "email": email });
    if (customer) {
        console.log("cus is present");
        if (await bcrypt.compare(password, customer.password)) {
            customer_ID = customer._id;
            let accesToken = jwt.sign({
                user: {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    email: customer.email,
                    address: customer.address,
                    city: customer.city,
                    state: customer.state,
                    pincode: customer.pincode,
                    contact: customer.mobile
                }
            }, process.env.ACCSESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.status(200).json({ accesToken });
        } else {
            res.send(400,"Invalid email or password");
        }
    }else{
        res.status(400,"Invalid email or password");
    }
});


// Register a new customer
// POST /api/customers
// Public
const registerCustomer = asyncHandler(async (req, res) => {
    let details = Customer(req.body);
    console.log(details);

    let customerExists = await Customer.findOne({ email: details.email });
    if (customerExists) {
        res.status(400).send("Customer already exists");
    }
    let hashedPass = await bcrypt.hash(req.body.password, 10);
    let customer = await Customer.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        contact: req.body.mobile,
        password: hashedPass
    });

    if (customer) {
        res.status(200).json({
            _id: customer._id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            address: customer.address,
            city: customer.city,
            state: customer.state,
            pincode: customer.pincode,
            contact: customer.mobile,
            password: customer.password
        });
    } else {
        res.status(400, "Invalid customer data");
    }

});


// Get a customer
// Get /api/customers
// Private
let getCustomer = asyncHandler(async (req, res) => {
    let customer = await Customer.findById(customer_ID);
    if (customer) {
        res.status(200).json({
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            address: customer.address,
            city: customer.city,
            state: customer.state,
            pincode: customer.pincode,
            contact: customer.mobile
        });
    } else {
        res.status(404,"Customer not found");
    }
});

// Get all customers
// GET/api/customers
// admin
const getAllCustomers = asyncHandler(async (req, res) => {
    let customers = await Customer.find();
    if(customers){
        res.status(200).json(customers);
    }else{
        res.status(401,"invalid request");
    }
});

// Update a customer
// PUT /api/customers
// Private

const updateCustomer = asyncHandler(async (req, res) => {
    let updatedCustomer = await Customer.findByIdAndUpdate(customer_ID, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        contact: req.body.mobile
    }, { new: true });
    res.status(200).json(updatedCustomer);
});


// Delete a customer
// DELETE /api/customers
// Private/Admin
const deleteCustomer = asyncHandler(async (req, res) => {
    let customer = await Customer.findByIdAndDelete(customer_ID);
    if (customer) {
        res.json({ message: 'Customer removed' });
    } else {
        res.status(404,"Customer not found");
    }
});

export { loginCustomer, registerCustomer, getCustomer, updateCustomer, deleteCustomer, getAllCustomers, customer_ID };
