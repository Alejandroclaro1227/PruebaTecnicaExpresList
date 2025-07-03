import sqlite3 from "sqlite3";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../types/Task";

export class Database {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database("./tasks.db");
    this.init();
  }

  private init(): void {
    const createTable = `
      CREATE TABLE IF NOT EXISTS tasks (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        completed INTEGER DEFAULT 0,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      )
    `;

    this.db.run(createTable, (err) => {
      if (err) {
        console.error("Error creando tabla tasks:", err);
      } else {
        console.log("✅ Base de datos SQLite inicializada correctamente");
      }
    });
  }

  getAllTasks(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM tasks ORDER BY createdAt DESC",
        (err, rows: any[]) => {
          if (err) {
            reject(err);
          } else {
            const tasks = rows.map((row) => ({
              ...row,
              completed: Boolean(row.completed),
              createdAt: new Date(row.createdAt),
              updatedAt: new Date(row.updatedAt),
            }));
            resolve(tasks);
          }
        }
      );
    });
  }

  createTask(title: string, description?: string): Promise<Task> {
    return new Promise((resolve, reject) => {
      const id = uuidv4();
      const now = new Date().toISOString();

      const task: Task = {
        id,
        title,
        description,
        completed: false,
        createdAt: new Date(now),
        updatedAt: new Date(now),
      };

      this.db.run(
        "INSERT INTO tasks (id, title, description, completed, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)",
        [id, title, description, 0, now, now],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(task);
          }
        }
      );
    });
  }

  updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
    return new Promise((resolve, reject) => {
      const updatedAt = new Date().toISOString();

      // Construir la consulta dinámicamente
      const fields = [];
      const values = [];

      if (updates.title !== undefined) {
        fields.push("title = ?");
        values.push(updates.title);
      }

      if (updates.description !== undefined) {
        fields.push("description = ?");
        values.push(updates.description);
      }

      if (updates.completed !== undefined) {
        fields.push("completed = ?");
        values.push(updates.completed ? 1 : 0);
      }

      fields.push("updatedAt = ?");
      values.push(updatedAt);
      values.push(id);

      const query = `UPDATE tasks SET ${fields.join(", ")} WHERE id = ?`;

      this.db.run(query, values, function (err) {
        if (err) {
          reject(err);
        } else if (this.changes === 0) {
          resolve(null);
        } else {
          // Obtener la tarea actualizada
          database.getTaskById(id).then(resolve).catch(reject);
        }
      });
    });
  }

  getTaskById(id: string): Promise<Task | null> {
    return new Promise((resolve, reject) => {
      this.db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row: any) => {
        if (err) {
          reject(err);
        } else if (!row) {
          resolve(null);
        } else {
          const task: Task = {
            ...row,
            completed: Boolean(row.completed),
            createdAt: new Date(row.createdAt),
            updatedAt: new Date(row.updatedAt),
          };
          resolve(task);
        }
      });
    });
  }

  deleteTask(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.changes > 0);
        }
      });
    });
  }
}

export const database = new Database();
