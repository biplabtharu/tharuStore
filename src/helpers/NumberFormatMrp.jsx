const NumberFormatMrp = ({price}) => {
    return (
          Intl.NumberFormat("ne-NP", 
          {
          style:"currency",
          currency:"NPR",
          maximumFractionDigits:2,
          }
          ) .format((price*131.88) + 4000)
    )
  }
  
  export default NumberFormatMrp