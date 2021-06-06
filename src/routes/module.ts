import type { Request, Response, NextFunction } from 'express';
import {
  insertModule,
  selectModules,
  updateUsers,
  destroyModule,
  getModuleById,
} from '../services/module';
import { selectCurrentEvent } from '../services/event';

// return all modules for specified user
export async function getModules(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin');
  res.header('Content-Type', 'application/json; charset=utf-8');
  const modules = await selectModules(req.query.userId as string);
  res.end(JSON.stringify(modules));
}

// delete exist Module
export async function deleteModule(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin');
  res.header('Content-Type', 'application/json; charset=utf-8');
  const deletedModule = await destroyModule(req.params.id);
  if (deletedModule == 1) {
    res.status(204).end(JSON.stringify({}));
  } else {
    res.status(404).end();
  }
}

// create new Module
export async function postModule(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin');
  res.header('Content-Type', 'application/json; charset=utf-8');
  const module = await insertModule(req.body.name, req.body.userId);
  const module_id = JSON.parse(JSON.stringify(module)).id;
  res.status(201).end(JSON.stringify({ id: module_id }));
}

// add users to Module
export async function addUsers(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin');
  res.header('Content-Type', 'application/json; charset=utf-8');

  const updatedModule = await updateUsers(
    req.params.id as string,
    req.body.userId
  );

  if (JSON.stringify(updatedModule) == JSON.stringify([1])) {
    const module = await getModuleById(req.params.id);
    res.status(200).end(JSON.stringify(module));
  }
}
