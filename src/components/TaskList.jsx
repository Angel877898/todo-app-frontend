import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Typography, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <React.Fragment key={task.id}>
          <ListItem>
            <Checkbox
              edge="start"
              checked={task.completed || task.endDate}
              onClick={() => onUpdateTask(task.id, { ...task, completed: !task.completed })}
              />
            <ListItemText
              primary={
                <span style={{ height:'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {task.name}
                </span>
              }
              secondary={
                <>
                  <Typography component="b" variant="body2" color="textPrimary">
                    <span style={{ height:'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {task.description}
                    </span>
                    <br />
                  </Typography>
                  Start Date: {moment(task.startDate).format('DD/MM/YYYY')}
                  <br />
                  End Date: {task.endDate ? moment(task.endDate).format('DD/MM/YYYY') : 'Pending'}
                  <br />
                  <span style={{ height:'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Responsible: {task.email}
                  </span>
                </>
              }
              />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {index !== tasks.length - 1 && <Divider  variant="middle" />}
        </React.Fragment>
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
