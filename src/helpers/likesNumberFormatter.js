const formatnumberOfLikesToK = (numberOfLikes) => {
  return (
    Math.abs(numberOfLikes) > 999 ? (
      (`${Math.sign(numberOfLikes) * ((Math.abs(numberOfLikes)/1000).toFixed(1))}k`)
    ) : (
      (Math.sign(numberOfLikes) * Math.abs(numberOfLikes))
    )
  )
}

export default formatnumberOfLikesToK;