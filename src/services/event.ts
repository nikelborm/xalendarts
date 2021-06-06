import { Events } from 'pg';
import { Op } from 'sequelize';
import { startsWith } from 'sequelize/types/lib/operators';
import { sequelize } from '../db/connection';
import { Event } from '../db/models/event';

export async function selectCurrentEvent(id: any) {
  const event = await Event.findOne({
    where: {
      id: {
        [Op.eq]: id as number,
      },
    },
  });

  return event;
}

export async function selectEvents(
  id: number,
  startDate: string,
  endDate: string
) {
  const events = await Event.findAll({
    where: {
      module_id: {
        [Op.eq]: id,
      },

      start_date: {
        [Op.gte]: Date.parse(startDate),
      },

      end_date: {
        [Op.lte]: Date.parse(endDate),
      },
    },
  });

  return events;
}

export async function updateCurrentEvent(
  id: any,
  startTime: string,
  endTime: string,
  name: string,
  color: string,
  aud: string,
  link: string,
  theme: string
) {
  const updatedEvent = await Event.update(
    {
      name: name,
      color: color,
      aud: aud,
      link: link,
      theme: theme,
      start_time: startTime,
      end_time: endTime,
    },
    {
      where: {
        id: {
          [Op.eq]: id as number,
        },
      },
    }
  );

  return updatedEvent;
}

export async function deleteCurrentEvent(eventId: any) {
  const deletedEvent = await Event.destroy({
    where: {
      id: {
        [Op.eq]: eventId as number,
      },
    },
  });

  return deletedEvent;
}

export async function setCurrentEvent(
  name: string,
  color: string,
  aud: string,
  link: string,
  teacher: string,
  theme: string,
  startTime: string,
  endTime: string,
  moduleId: any
) {
  const newEvent = sequelize.query(
    `INSERT INTO events (name, color, aud, link, teacher, theme, start_date, end_date, module_id)
     VALUES ('${name}', '${color}', '${aud}', '${link}', '${teacher}', '${theme}', '${startTime}', '${endTime}', '${moduleId}') RETURNING id;`
  );

  return newEvent;
}
