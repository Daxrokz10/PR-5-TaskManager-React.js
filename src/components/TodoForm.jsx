import React from 'react'

function TodoForm() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <form action="" method='post'>
                <label htmlFor="taskname" className='from-label'>Task Name</label>
                <input type="text" name="taskname" id="taskname" className='form-control' />
                <label htmlFor="taskdes" className='form-label'>Task Description</label>
                <textarea name="taskdes" id="taskdes" className='form-control'></textarea>
                <label htmlFor="taskpriority" className='form-label'>Task Priority</label>
                <select name="taskpriority" id="taskpriority" className='form-control'>
                    <option value="" selected disabled>---Set Priority---</option>
                    <option value="high" className='text-danger'>High</option>
                    <option value="medium" className='text-warning'>Medium</option>
                    <option value="low" className='text-success'>Low</option>
                </select>
                <button type="submit" className='btn btn-outline-success mt-2'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
