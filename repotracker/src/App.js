import React, { useState } from "react";
import Header from './layout/Header'
import Repositories from './components/Repositories'

const App = () => {
  const [formData, setFormData] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = e => {
      setFormData(e.target.value)
  }
  const handleFormSubmit = e => {
      e.preventDefault();
      setUsername(formData);
      setIsSubmitted(true);
  }

  return (
      <>
          <Header />
          <form onSubmit={handleFormSubmit} id="searchForm">
              <input
                  type="text" name="username" id="username"
                  onChange={handleInput} value={formData}
                  placeholder="Search for a username" />
              <button type="submit" id="submitButton">Search</button>
          </form>
          {isSubmitted && <Repositories username={username} />}
         
      </>
  )
}

export default App
