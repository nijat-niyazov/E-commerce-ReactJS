export const Child = ({ handleCountChange, count }) => {
  
  console.log('child -', count);

  const handleClick = () => {
    handleCountChange(count + 1);
  };

  return <button onClick={handleClick}>Increment Count</button>;
};
