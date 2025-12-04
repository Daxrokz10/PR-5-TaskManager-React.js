import React from 'react'

function TodoView({ list, totalPages, handlePagination ,handleDelete , handleEdit ,startIndex , currentPage}) {
  return (
    <div>
      <div className="card-ish mt-4">
        <h5 style={{ marginBottom: 12 }}>Employee</h5>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.length !== 0 ? (
                list.map((task, index) => (
                  <tr key={task.id}>
                    <td>{startIndex + index + 1}</td>
                    <td>{task.taskname}</td>
                    <td style={{ maxWidth: 260, whiteSpace: 'normal', wordBreak: 'break-word' }}>{task.taskdes}</td>
                    <td>{task.taskpriority}</td>
                    <td>
                      <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(task.id)}>Delete</button>
                      <button className="btn btn-sm btn-warning" onClick={() => handleEdit(task.id)}>Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center' }}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row justify-content-center mt-2 mb-5 ">
        <div className="col-12 d-flex">
          {
            [...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={i}
                  onClick={() => handlePagination(pageNum)}
                  className={`btn ${currentPage === pageNum ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {pageNum}
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TodoView
