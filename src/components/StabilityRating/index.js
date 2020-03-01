import React from "react"
import Text from "components/Text"

const StabilityRating = ({ level }) => {
  const fullPips = []
  const emptyPips = []

  for (let i = 1; i < level; i++) {
    fullPips.push("▉")
  }

  for (let i = level + 1; i <= 5; i++) {
    emptyPips.push("•")
  }

  return (
    <span style={{ fontSize: "1.5em" }}>
      <Text variant="monospaced">
        {fullPips}
        {level < 6 && level}
        {emptyPips}
        {level === 6 && "✔"}
      </Text>
    </span>
  )
}

export default StabilityRating
