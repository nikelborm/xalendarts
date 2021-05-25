import { User } from '../db/models/user';

export async function userInfo(username: string) {
  console.log(username);

  const user = await User.findOne({
    attributes: ['user_id', 'type'],
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
