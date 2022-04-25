import { Stack, CircularProgress } from '@mui/material'

import { UserCard } from '../usersCard/UserCard'

interface ICardList {
  users: IUser[]
}

export const CardList: React.FC<ICardList> = ({ users }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      m={0}
      p={0}
      flexWrap="wrap"
      minHeight="calc(100% - 56px)"
    >
      {users?.length > 0 ? (
        users.map((user, index) => (
          <UserCard
            key={user.id}
            user={user}
            muted={index === 5}
            talking={index === 3}
          />
        ))
      ) : (
        <CircularProgress color="info" sx={{ margin: 'auto' }} />
      )}
    </Stack>
  )
}
