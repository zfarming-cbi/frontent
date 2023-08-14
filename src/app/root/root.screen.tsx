import { useQuery } from "@apollo/client"
import { Add, Remove } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import { FC } from "react"
import { AppEnvVars } from "../../settings/env/environment"
import { GET_USERS } from "../../settings/grahpql/queries/queries"
import { useAppDispatch } from "../../settings/redux/hooks"
import { UserList } from "../../share/components/user-list"
import { User } from "../../share/models/user"

export const RootScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {
    loading,
    error,
    data: { users = [] } = {},
  } = useQuery<{ users: User[] }>(GET_USERS)

  return (
    <>
      <h1>{AppEnvVars.APP_TITLE}</h1>
      <div>
        <Button variant="outlined" size="small" startIcon={<Add />} />
        <Typography variant="caption" display="inline-block" marginX={1}>
          asdasd
        </Typography>
        <Button variant="outlined" size="small" startIcon={<Remove />} />
      </div>
      <UserList users={users} />
    </>
  )
}
