import PropTypes from 'prop-types'

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.startDate}</p>
          <p>{task.endDate}</p>
          <p>{task.email}</p>
          <button onClick={() => onUpdateTask(task.id, { ...task, completed: !task.completed })}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
          </button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}

export default TaskList
