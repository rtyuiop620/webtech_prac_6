/* General styles */
body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #666;
  }
  
  fieldset {
    border: none;
    padding: 0;
  }
  
  .inactive {
    display: none;
  }
  
  #error {
    color: red;
    font-weight: bold;
  }
  
  /* Form styles */
  input[type="text"], select {
    padding: 0.5rem;
    margin: 0.5rem 0;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  input[type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  input[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  /* Menu styles */
  #menu {
    text-align: center;
  }
  
  .hidden {
    display: none;
  }