const labelGender= ["Female", "Male"];

const data = {
    labels: [
      'Female',
      'Male',
    ],
    datasets: [{
      label: 'Gender Distribution',
      data: [90, 43],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  const chart = new Chart(document.getElementById('myChartgender'), config);