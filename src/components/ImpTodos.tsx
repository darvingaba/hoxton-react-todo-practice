

export function ImpTodos({selectValue}){
    return(
        <>
        <h3>Select important tasks</h3>
      <select 
       onChange={selectValue}
       id='select'>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      </>
    )
}