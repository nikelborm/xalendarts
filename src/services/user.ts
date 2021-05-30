import { User } from '../db/models/user';

export async function userInfo(username: string) {
  const user = await User.findOne({
    attributes: ['user_id', 'type', 'full_name'],
    where: {
      full_name: username,
    },
  });

  if (user) {
    return user;
  } else {
    return null;
  }
}
