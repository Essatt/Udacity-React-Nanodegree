import React from 'react'
import PageTitle from './PageTitle'
import Shelf from './Shelf'
import AddButton from './AddButton'

const MainPage = (props) => {
  const { data, history, updateShelf } = props;
  return (
    <div className="list-books">
      <PageTitle title='MyReads' />
      <div className="list-books-content">
        <div>
          <Shelf
            title='Currently Reading'
            data={data}
            type='currentlyReading'
            updateShelf={updateShelf}
          />
          <Shelf
            title='Want to Read'
            data={data}
            type='wantToRead'
            updateShelf={updateShelf}
          />
          <Shelf
            title='Read'
            data={data}
            type='read'
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <AddButton history={history} />
    </div>
  )
}

export default MainPage
