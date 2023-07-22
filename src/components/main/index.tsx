import { useAuthContext, useThemeContext } from "../../contexts"

import { Auth, Loader, Table } from ".."

const Main = () => {
  const { user, loading } = useAuthContext()
  const { switchTheme } = useThemeContext()

  if (loading) {
    return <Loader />
  }

  if (user) {
    return (
      <>
        <button onClick={switchTheme}>Switch Theme</button>
        <Table />
      </>
    )
  }

  return <Auth />
}

export default Main
