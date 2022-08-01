let barChart = document.getElementById('bar-Chart');

barChart.style.display = 'flex';
barChart.style.justifyContent = 'center';

let chartData = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];


let ul = document.createElement('ul');
    
for (i = 0; i < 6; i++) {
  let div = document.createElement('div');
  ul.append(div);
        
  let li = document.createElement('li');
  li.style.height = chartData[i].amount * 2 + 'px';
        
  let p = document.createElement('p');
  p.innerText = chartData[i].day;
  div.appendChild(li);
  div.appendChild(p);
};
    

barChart.appendChild(ul);