const labelAge= ["18", "19", "20", "21", "22", "23", "24", "25", "26","27", "28", "29","30", "31", "37", "40", "46", "50", "55"];
const labelGender= ["Male", "Female"];
const labelNationality= ["Brazil", "Netherlands", "Portugal", "Spain", "Other"];
const labelSchooling= ["High School", "Bachelor's degree", "Master's degree", "Primary school"];

const data = {
    labels: labelAge,
    datasets: [{
      label: 'Number of paricipants',
      data: [5, 19, 46, 17, 13, 5, 9, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      backgroundColor: [
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',

      ],
      borderColor: [
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
        'rgb(40, 183, 191)',
      ],
      borderWidth: 1
    }]
  };

  const options = {
    scales: {
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: "Age of Participants",
                },
            },
        ],
        yAxes: [
            {
                scaleLabel: true,
                labelString: "Number of Participants"
            },
        ],
    },
  }

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const chart = new Chart(document.getElementById('myChart'), config);

  