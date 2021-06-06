import { Op } from 'sequelize';
import { User } from '../db/models/user';

export async function userInfo(id: any) {
  const user = await User.findOne({
    attributes: ['user_id', 'type', 'full_name'],
    where: {
      user_id: {
        [Op.eq]: id as number,
      },
    },
  });

  if (user) {
    return user;
  } else {
    return null;
  }
}
