import mongoose from "mongoose";
const ticketGenerationSchema = new mongoose.Schema({
    ticketNo: {
        type: String,
      
    },
    customerID: {
        type: String

    },
    customerName: {
        type: String,
 
    },
    customercontact: {
        type: Number,
    
    },
    address: {
        type: String,
      
    },
    street: {
        type: String,
       
    },
    city: {
        type: String,
       
    },
    state: {
        type: String,
   
    },
    pincode: {
        type: String,
        
    },
    itemID: {
        type: String,
       
    },
    collectionAgentID: {
        type: String,
    },
    collectionAgentName: {
        type: String,
    },
    collectionAgentcontact: {
        type: String,
    },
    ticketStatus: {
        type: String,
        enum: ['Pending', 'Scheduled', 'Accepted', 'Rejected'],
        default: 'Pending',
   
    },
    pickupDate: {
        type: Date,
    }
}, {
    timestamps: true
});

const ticketGeneration = mongoose.model('TicketGeneration', ticketGenerationSchema);
export default ticketGeneration;