const data = {
    labels: [
      'High School',
      'Bachelor Degree',
      'Master degree',
      'Primary school',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [94, 29, 10, 1],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
      ]
    }]
  };

  const config = {
    type: 'polarArea',
    data: data,
    options: {}
  };

  const chart = new Chart(document.getElementById('myChart'), config);