import { Meeting } from '../db/models/meeting';
import { Op } from 'sequelize';

export async function getAvaliableMeetings(userId: string) {
  const meetings = await Meeting.findAll({
    attributes: ['name', 'start_time', 'end_time'],
    where: {
      user_id: {
        [Op.eq]: userId,
      },
    },
  });

  if (JSON.stringify(meetings) === '[]') {
    return null;
  } else {
    return meetings;
  }
}
