import { StyledTable } from "./index.styles"

const playersMock = [
  { name: "Player 1" },
  { name: "Player 2" },
  { name: "Player 3" },
  { name: "Player 4" },
  { name: "Player 5" },
  { name: "Player 6" },
  { name: "Player 7" },
  { name: "Player 8" },
  { name: "Player 9" },
]

const Table = () => {
  return (
    <StyledTable>
      {playersMock.map(({ name }) => (
        <div
          key={name}
          style={{ position: "absolute", transform: "translate(-50%, -50%)" }}
        >
          {name}
        </div>
      ))}
    </StyledTable>
  )
}

export default Table
