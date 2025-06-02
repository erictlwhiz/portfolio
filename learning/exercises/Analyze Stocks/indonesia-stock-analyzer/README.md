# Indonesia Stock Analyzer

## Overview
The Indonesia Stock Analyzer is a web application that allows users to input an Indonesian stock symbol and retrieve a summary of financial data. The application fetches data from Yahoo Finance and presents it in a user-friendly format, including a table and a chart that tracks the stock price and other key financial information. Users also have the option to download the table data as a CSV file.

## Features
- Input an Indonesian stock symbol to retrieve financial data.
- Display a summary of key financial metrics.
- Visualize stock price trends and other financial data through charts.
- Download the financial data as a CSV file.

## Project Structure
```
indonesia-stock-analyzer
├── src
│   ├── app.py                # Entry point of the application
│   ├── finance
│   │   ├── __init__.py       # Initializes the finance module
│   │   ├── fetch_data.py      # Fetches financial data from Yahoo Finance
│   │   ├── plot.py            # Contains functions for data visualization
│   │   └── summary.py         # Generates a summary of financial data
│   └── templates
│       └── index.html         # HTML template for the web application
├── requirements.txt           # Lists project dependencies
└── README.md                  # Documentation for the project
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd indonesia-stock-analyzer
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage
1. Run the application:
   ```
   python src/app.py
   ```

2. Open your web browser and navigate to `http://127.0.0.1:5000`.

3. Enter an Indonesian stock symbol in the input field and submit to view the financial summary, table, and chart.

## Dependencies
- Flask
- Pandas
- Matplotlib
- Plotly
- Yahoo Finance API (or any library used for fetching financial data)

## License
This project is licensed under the MIT License. See the LICENSE file for more details.