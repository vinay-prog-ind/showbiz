const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWJmODg4NDY4YTkyZTAwNDgxOGY2YWU0YjdhZThkZiIsIm5iZiI6MTcyNDc2NTUzMS44OTkxMzIsInN1YiI6IjY0MjZlZDg5OTYwY2RlMDEwM2E0MzAwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FFKZCUxTd_Czh_Nt4bEfylWFJsHMY6xx_8ssacfLkPY'
  }
};

fetch('https://api.themoviedb.org/3/account/18606437', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));