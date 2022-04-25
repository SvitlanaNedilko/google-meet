import { UserCard } from '../usersCard/UserCard'

import Stack from '@mui/material/Stack'

interface ICardList {
  users: IUser[]
}

export const CardList: React.FC<ICardList> = ({ users }) => {
  return (
    <Stack direction="row" gap={2} component="ul" m={0} p={0} flexWrap="wrap">
      {users?.length > 0 &&
        users.map((user, index) => (
          <UserCard
            user={user}
            key={user.id}
            muted={index === 5}
            talking={index === 3}
          />
        ))}
    </Stack>
  )
}
