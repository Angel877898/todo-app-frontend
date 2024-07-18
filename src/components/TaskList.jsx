import PropTypes from 'prop-types'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Typography, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <>
          <ListItem>
            <Checkbox
              edge="start"
              checked={task.completed}
              onClick={() => onUpdateTask(task.id, { ...task, completed: !task.completed })}
            />
            <ListItemText
              primary={
                <div style={{ height:'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {task.name}
                </div>
              }
              secondary={
                <>
                  <Typography component="div" variant="body2" color="textPrimary">
                    <div style={{ height:'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {task.description}
                    </div>
                  </Typography>
                  Start Date: {moment(task.startDate).format('DD/MM/YYYY')}
                  <br />
                  End Date: {task.endDate ? moment(task.endDate).format('DD/MM/YYYY') : 'Pending'}
                  <br />
                  <div style={{ height:'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Responsible: {task.email}
                  </div>
                </>
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {index !== tasks.length - 1 && <Divider variant="middle" />}
        </>
      ))}
    </List>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string,
      email: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}

export default TaskList
