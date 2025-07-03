import { Request, Response } from "express";
import { database } from "../models/Database";
import { CreateTaskDto, UpdateTaskDto } from "../types/Task";

export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await database.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error("Error obteniendo tareas:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description }: CreateTaskDto = req.body;

    // Validación
    if (!title || title.trim().length === 0) {
      res.status(400).json({ error: "El título es requerido" });
      return;
    }

    const task = await database.createTask(title.trim(), description?.trim());
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creando tarea:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updates: UpdateTaskDto = req.body;

    // Validación básica
    if (!id) {
      res.status(400).json({ error: "ID de tarea requerido" });
      return;
    }

    if (updates.title !== undefined && updates.title.trim().length === 0) {
      res.status(400).json({ error: "El título no puede estar vacío" });
      return;
    }

    const task = await database.updateTask(id, updates);

    if (!task) {
      res.status(404).json({ error: "Tarea no encontrada" });
      return;
    }

    res.json(task);
  } catch (error) {
    console.error("Error actualizando tarea:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "ID de tarea requerido" });
      return;
    }

    const deleted = await database.deleteTask(id);

    if (!deleted) {
      res.status(404).json({ error: "Tarea no encontrada" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error eliminando tarea:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
