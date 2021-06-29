const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//create schema for Pizza
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);
//get total count of comments and replies on retreival
PizzaSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});


//vreate the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza Model
module.exports = Pizza;