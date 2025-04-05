from flask import Flask, render_template
import os

# إنشاء تطبيق فلاسك
app = Flask(__name__)

# تهيئة متغيرات البيئة
PORT = int(os.environ.get('PORT', 10000))  # يستخدم PORT من Render أو 10000 افتراضيًا

# صفحة الرئيسية
@app.route('/')
def index():
    return render_template('index.html')

# صفحة التجارة الإلكترونية
@app.route('/ecommerce')
def ecommerce():
    return render_template('ecommerce.html')

# نقطة فحص الصحة (مهمة لـ Render)
@app.route('/health')
def health_check():
    return "OK", 200

# تشغيل التطبيق (معدل خصيصًا لـ Render)
if __name__ == '__main__':
    app.run(
        host='0.0.0.0',  # ضروري للعمل على Render
        port=PORT,       # يستخدم البورت المخصص من Render
        debug=False,     # معطل لأسباب أمنية
        threaded=True    # لتحسين الأداء عند وجود زيارات متعددة
    )