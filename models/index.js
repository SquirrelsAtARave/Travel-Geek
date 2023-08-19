const User = require('./User');
const Expense = require('./Expense');
const Itinerary = require('./Itinerary');


User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
Expense.belongsTo(User, {
    foreignKey: 'user_id'
  });

User.hasMany(Itinerary, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
Itinerary.belongsTo(User, {
    foreignKey: 'user_id'
  });
module.exports = { User,Expense,Itinerary };
