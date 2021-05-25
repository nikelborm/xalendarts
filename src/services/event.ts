import { Op } from 'sequelize';
import { Event } from '../db/models/event';

export async function ragedEvents(
  userId: any,
  startDate: string,
  endDate: string
) {
  const events = await Event.findAll({
    attributes: [
      'id',
      'name',
      'color',
      'teacher',
      'module_name',
      'aud',
      'link',
      'theme',
      'group_name',
      'start_time',
      'end_time',
      'date',
    ],
    where: {
      date: {
        [Op.gte]: startDate,
        [Op.lte]: endDate,
      },

      user_id: {
        [Op.eq]: userId as number,
      },
    },
  });

  if (JSON.stringify(events) == '[]') {
    return null;
  } else {
    return events;
  }
}
