import pandas as pd
import yfinance as yf

def fetch_stock_data(symbol):
    stock = yf.Ticker(symbol)
    data = stock.history(period="1y")  # Fetching 1 year of historical data
    return data

def fetch_financial_data(symbol):
    stock = yf.Ticker(symbol)
    financials = stock.financials
    return financials

def fetch_summary_data(symbol):
    stock = yf.Ticker(symbol)
    info = stock.info
    return {
        "symbol": info.get("symbol"),
        "longName": info.get("longName"),
        "sector": info.get("sector"),
        "industry": info.get("industry"),
        "marketCap": info.get("marketCap"),
        "trailingPE": info.get("trailingPE"),
        "totalRevenue": info.get("totalRevenue"),
        "profitMargins": info.get("profitMargins"),
        "debtToEquity": info.get("debtToEquity"),
        "dividendYield": info.get("dividendYield"),
        "fiftyTwoWeekHigh": info.get("fiftyTwoWeekHigh"),
        "fiftyTwoWeekLow": info.get("fiftyTwoWeekLow"),
    }