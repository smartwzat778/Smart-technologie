from flask import Flask, render_template
import os

app = Flask(__name__)

# تأكد من أن المسارات صحيحة
app.template_folder = 'templates'  # تأكد من وجود المجلد
app.static_folder = 'static'       # تأكد من وجوده

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ecommerce')
def ecommerce():
    return render_template('ecommerce.html')

@app.route('/health')
def health_check():
    return "OK", 200

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 10000)),
        debug=False,
        threaded=True
    )
