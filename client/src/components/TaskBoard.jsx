import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask.trim()) return;
    await api.post("/tasks", { title: newTask });
    setNewTask("");
    fetchTasks();
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
    const id = result.draggableId;
    const newStatus = result.destination.droppableId;
    await api.put(`/tasks/${id}`, { status: newStatus });
    fetchTasks();
  };

  const statuses = ["todo", "in-progress", "done"];

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: 20 }}>
          {statuses.map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    width: 250,
                    minHeight: 500,
                    background: "#eee",
                    padding: 10,
                    borderRadius: 8,
                  }}
                >
                  <h3>{status.toUpperCase()}</h3>
                  {tasks
                    .filter((t) => t.status === status)
                    .map((t, i) => (
                      <Draggable key={t._id} draggableId={t._id} index={i}>
                        {(provided2) => (
                          <div
                            ref={provided2.innerRef}
                            {...provided2.draggableProps}
                            {...provided2.dragHandleProps}
                            style={{
                              background: "#fff",
                              marginBottom: 10,
                              padding: 10,
                              borderRadius: 5,
                              ...provided2.draggableProps.style,
                            }}
                          >
                            {t.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
