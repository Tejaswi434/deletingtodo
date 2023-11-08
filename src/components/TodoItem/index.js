// Write your code here
const TodoItem = singleItem => {
  const {initialTodosList, deletingfromtodo} = singleItem
  const {id, title} = initialTodosList
  const {deletingfrombigtodo} = deletingfromtodo

  const deleteitem = () => {
    deletingfrombigtodo(id)
  }
  return (
    <li>
      <div className="eachitem_rowing">
        <p>{title}</p>
        <button className="button-style" onChange={deleteitem} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
