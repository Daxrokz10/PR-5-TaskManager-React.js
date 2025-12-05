import React from 'react'

function TodoForm({ handleSubmit, handleInput, task }) {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="" method='post' onSubmit={handleSubmit}>
            <label htmlFor="taskname" className='from-label'>Task Name</label>
            <input onChange={handleInput} value={task.taskname || ''} type="text" name="taskname" id="taskname" className='form-control' />
            <label htmlFor="taskdes" className='form-label'>Task Description</label>
            <textarea onChange={handleInput} value={task.taskdes || ''} name="taskdes" id="taskdes" className='form-control'></textarea>
            <label htmlFor="taskpriority" className='form-label'>Task Priority</label>
            <select onChange={handleInput} name="taskpriority" id="taskpriority" className='form-control'>
              <option value="" disabled>---Set Priority---</option>
              <option value="High" className='text-danger'>High</option>
              <option value="Medium" className='text-warning'>Medium</option>
              <option value="Low" className='text-success'>Low</option>
            </select>
            <button type="submit" className='btn btn-outline-success mt-2'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
