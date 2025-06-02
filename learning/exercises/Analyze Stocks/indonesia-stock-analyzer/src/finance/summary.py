import pandas as pd

def generate_summary(summary_data):
    summary = {
        "Symbol": summary_data.get('symbol'),
        "Name": summary_data.get('longName'),
        "Sector": summary_data.get('sector'),
        "Industry": summary_data.get('industry'),
        "Market Cap": summary_data.get('marketCap'),
        "PE Ratio": summary_data.get('trailingPE'),
        "Revenue": summary_data.get('totalRevenue'),
        "Profit Margins": summary_data.get('profitMargins'),
        "Debt/Equity": summary_data.get('debtToEquity'),
        "Dividend Yield": summary_data.get('dividendYield'),
        "52 Week High": summary_data.get('fiftyTwoWeekHigh'),
        "52 Week Low": summary_data.get('fiftyTwoWeekLow'),
    }
    summary_df = pd.DataFrame([summary])
    return summary_df

def format_summary_for_display(summary_df):
    return summary_df.to_html(index=False)