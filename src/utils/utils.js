export const calculateTotalAmount = (orders) => {
    return orders.reduce((total, order) => total + order.payableAmount, 0);
};