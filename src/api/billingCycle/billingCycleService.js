const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOpitions({new: true, runValidators: true})

module.exports = BillingCycle
