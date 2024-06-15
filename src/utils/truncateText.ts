export const truncateText = (text: string, maxLength= 50) => {
    if (text?.length <= maxLength) {
      return text;
    } else {
      return text?.substring(0, maxLength) + '...';
    }
  };