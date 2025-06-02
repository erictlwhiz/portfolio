import matplotlib
matplotlib.use('Agg')  # Use a non-interactive backend

import pandas as pd
import matplotlib.pyplot as plt
import io
import base64

def create_plot(financial_data):
    plt.figure(figsize=(10, 4))
    plt.plot(financial_data.index, financial_data['Close'], label='Close Price')
    plt.xlabel('Date')
    plt.ylabel('Close Price')
    plt.title('Stock Price Over Time')
    plt.legend()
    plt.tight_layout()

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode()
    plt.close()
    return f'data:image/png;base64,{plot_url}'

def plot_stock_data(stock_data):
    plt.figure(figsize=(14, 7))
    
    # Plotting the stock price
    plt.plot(stock_data.index, stock_data['Close'], label='Close Price', color='blue')
    
    # Adding titles and labels
    plt.title('Stock Price Over Time')
    plt.xlabel('Date')
    plt.ylabel('Price (IDR)')
    plt.xticks(rotation=45)
    plt.legend()
    
    # Show the plot
    plt.tight_layout()
    plt.show()

def plot_financial_metrics(metrics_data):
    plt.figure(figsize=(14, 7))
    
    # Plotting financial metrics
    for metric in metrics_data.columns[1:]:
        plt.plot(metrics_data.index, metrics_data[metric], label=metric)
    
    # Adding titles and labels
    plt.title('Financial Metrics Over Time')
    plt.xlabel('Date')
    plt.ylabel('Value')
    plt.xticks(rotation=45)
    plt.legend()
    
    # Show the plot
    plt.tight_layout()
    plt.show()