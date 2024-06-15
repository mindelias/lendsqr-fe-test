export const formatCurrency = (amount: number) => {
    // Create Intl.NumberFormat object with Nigerian currency format
    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    });
  
    // Format the currency
    return formatter.format(amount);
  };
  
  // Example usage:
  const amount = 234467.51;
  console.log(formatCurrency(amount)); // Output: ₦234,467.51
  