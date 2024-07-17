import PropTypes from 'prop-types'

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.startDate}</p>
          <p>{task.endDate}</p>
          <p>{task.email}</p>
         
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

}

export default TaskList
