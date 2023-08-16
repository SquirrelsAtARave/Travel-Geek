const User = require('./User');
const Budget = require('./Budget');
const Expense = require('./Expense');
const Itinerary = require('./Itinerary');

User.hasOne(Budget, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Budget.belongsTo(User, {
  foreignKey: 'user_id'
});

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
module.exports = { User, Budget,Expense,Itinerary };
