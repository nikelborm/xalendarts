import { Op, Sequelize } from 'sequelize';
import { Module } from '../db/models/module';

export async function insertModule(name: string, userId: string[]) {
  const newModule = await Module.create(
    {
      name: name,
      user_id: userId,
    },
    {
      fields: ['name', 'user_id'],
    }
  );

  return newModule;
}

export async function getModuleById(moduleId: any) {
  const module = await Module.findOne({
    where: {
      id: {
        [Op.eq]: moduleId as number,
      },
    },
  });

  return JSON.stringify(module);
}

export async function selectModules(userId?: string) {
  if (typeof userId == typeof undefined) {
    const modules = await Module.findAll();
    return modules;
  } else {
    const modules = await Module.findAll({
      where: {
        user_id: {
          [Op.contains]: [userId!], // ! - non-null
        },
      },
    });

    return modules;
  }
}

export async function destroyModule(id: any) {
  const deleteModule = await Module.destroy({
    where: {
      id: {
        [Op.eq]: id as number,
      },
    },
  });

  return deleteModule;
}

export async function updateUsers(id: any, user_id: string) {
  const updatedModule = await Module.update(
    {
      user_id: Sequelize.fn('array_append', Sequelize.col('user_id'), user_id),
    },
    {
      where: {
        id: {
          [Op.eq]: id as number,
        },
      },
    }
  );

  return updatedModule;
}
