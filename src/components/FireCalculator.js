import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './FireCalculator.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function FireCalculator() {
  const [age, setAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [salary, setSalary] = useState('');
  const [savingsRate, setSavingsRate] = useState('');
  const [investmentRate, setInvestmentRate] = useState('');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Weak Investment Growth',
        data: [],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Moderate Investment Growth',
        data: [],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Strong Investment Growth',
        data: [],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  });

  const calculateGrowth = () => {
    const years = Array.from({ length: retirementAge - age }, (_, i) => i + 1);

    let weakValue = 0;
    let moderateValue = 0;
    let strongValue = 0;
    const weakReturn = 0.03;
    const moderateReturn = 0.06;
    const strongReturn = 0.09;

    const weakGrowth = [];
    const moderateGrowth = [];
    const strongGrowth = [];

    const annualSavings = salary * savingsRate;
    const annualInvestment = annualSavings * investmentRate;
    const annualCashSavings = annualSavings - annualInvestment;

    years.forEach(() => {
      weakValue = (weakValue + annualInvestment) * (1 + weakReturn) + annualCashSavings;
      moderateValue = (moderateValue + annualInvestment) * (1 + moderateReturn) + annualCashSavings;
      strongValue = (strongValue + annualInvestment) * (1 + strongReturn) + annualCashSavings;

      weakGrowth.push(weakValue);
      moderateGrowth.push(moderateValue);
      strongGrowth.push(strongValue);
    });

    setChartData({
      labels: years.map((year) => `Year ${year}`),
      datasets: [
        { ...chartData.datasets[0], data: weakGrowth },
        { ...chartData.datasets[1], data: moderateGrowth },
        { ...chartData.datasets[2], data: strongGrowth },
      ],
    });
  };

  return (
    <div className="fire-calculator">
      <h1>FIRE Calculator</h1>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Retirement Age:
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </label>
        <label>
          Savings Rate (as a decimal):
          <input
            type="number"
            value={savingsRate}
            onChange={(e) => setSavingsRate(e.target.value)}
          />
        </label>
        <label>
          Investment Rate (as a decimal):
          <input
            type="number"
            value={investmentRate}
            onChange={(e) => setInvestmentRate(e.target.value)}
          />
        </label>
      </div>
  
      <button onClick={calculateGrowth}>Calculate</button>
  
      {/* Display growth rate information */}
      <div className="growth-rates-info">
        <h3>Growth Rates</h3>
        <p><strong>Weak Growth:</strong> 3% annually</p>
        <p><strong>Moderate Growth:</strong> 6% annually</p>
        <p><strong>Strong Growth:</strong> 9% annually</p>
      </div>
  
      <div className="chart-container">
        <Line data={chartData} />
      </div>
  
      <p>This is not official financial advice, merely a project.</p>
      <footer>
        <p>Created by Ethan Diaz</p>
      </footer>
    </div>
  );
}

export default FireCalculator;
