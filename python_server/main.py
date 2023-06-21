from flask import Flask
import time

app = Flask(__name__)

@app.route('/')
def start():
    return "type /time to get the time"

@app.route('/time')
def calculate_time():
    initial_time = time.time()
    array = []
    for i in range(100):
        array.append(i)

    total_sum = 0
    for i in range(100):
        total_sum += array[i]

    final_time = time.time()

    return "PythonGOD time :" + str(final_time - initial_time)

if __name__ == '__main__':
    app.run(host='localhost', port=8084)
