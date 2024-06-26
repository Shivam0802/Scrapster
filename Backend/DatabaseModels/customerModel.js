import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({

    firstName: {
        type: String,
 
    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
    
    },
    address: {
        type: String,
    
    },
   
    city: {
        type: String,
     
    },
  
    pincode: {
        type: String,
      
    },
    state: {
        type: String,
     
    },
    contact: {
        type: Number,
     
    },
    password: {
        type: String,
       
    }
}, {
    timestamps: true
});

const customer = mongoose.model('Customer', customerSchema);
export default customer;