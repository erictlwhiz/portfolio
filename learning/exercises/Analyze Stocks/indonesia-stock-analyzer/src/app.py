from flask import Flask, render_template, request, jsonify
from finance.fetch_data import fetch_financial_data, fetch_summary_data, fetch_stock_data
from finance.summary import generate_summary
from finance.plot import create_plot

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    summary = None
    plot_url = None

    if request.method == 'POST':
        data = request.get_json()  # <-- Get JSON data from AJAX
        stock_symbol = data.get('stock_symbol')  # <-- Use the correct key
        financial_data = fetch_financial_data(stock_symbol)
        summary_data = fetch_summary_data(stock_symbol)  # <-- get summary dict
        summary = generate_summary(summary_data)
        historical_data = fetch_stock_data(stock_symbol)  # This should call stock.history()
        plot_url = create_plot(historical_data)  # Create the plot
        # Return JSON for AJAX
        return jsonify({
            'summary': summary.to_html(index=False),
            'table': financial_data.to_html(),
            'chart': f'<img src="{plot_url}"/>',
            'csv_url': '/download_csv?symbol=' + stock_symbol  # Implement this route if needed
        })

    return render_template('index.html', summary=summary, plot_url=plot_url)

if __name__ == '__main__':
    app.run(debug=True)