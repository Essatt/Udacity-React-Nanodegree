import React from 'react'

const AddButton = (props) => {
  return(
    <div className="open-search">
      <a onClick={() => props.history.push('/search')}>Add a book</a>
    </div>
  )
}

export default AddButton
