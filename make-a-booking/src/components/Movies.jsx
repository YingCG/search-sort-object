import React, { useState } from 'react'
import {fakeMovieService} from '../services/fakeMovieService'

function Movies() {
    const [contents, setContents] = useState({fakeMovieService})

  return (
     (contents.length === 0 ) &&
    <div>
       {contents.map((movie) => <div>{movie.title}</div>)}
     
    </div>
  )
}

export default Movies
