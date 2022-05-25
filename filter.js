let applicants =[
    {firstName: 'John', lastName:'Doe', favourite_color: 'white', age: 20, qualification: 'SSCE', experience:6},
    {firstName: 'Peter', lastName: 'Piper', favourite_color: 'blue', age: 17, qualification: 'OND', experience:5},
    {firstName: 'Angela', lastName: 'Okorie', favourite_color: 'green', age: 17, qualification: 'OND', experience:5},
    {firstName: 'Stella', lastName: 'Damascus', favourite_color: 'Red', age: 17, qualification: 'OND', experience:5},
    {firstName: 'Emeka', lastName: 'Ike', favourite_color: 'white', age: 28, qualification: 'SSCE', experience:4},
    {firstName: 'Liquor', lastName: 'Rose', favourite_color: 'yellow', age: 17, qualification: 'OND', experience:0},
    {firstName: 'White', lastName: 'Money', favourite_color: 'white', age: 30, qualification: 'SSCE', experience:10},
    {firstName: 'Precious', lastName: 'Agunbiade', favourite_color: 'white', age: 25, qualification: 'SSCE', experience:5}
];
  var filtered = applicants.filter(a=>a.experience> 4 && a.favourite_color === "white")
      console.log(filtered)
  