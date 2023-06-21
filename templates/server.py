from flask import Flask
import time

app = Flask(__name__)


@app.route('/time')
def hello_world():  # put application's code here
    # now count the time it takes to do something
    initial_time = time.time()
    array = []
    for i in range(100000000):
        array.append(i)

    sum = 0

    for i in range(100000000):
        sum += array[i]

    final_time = time.time()

    return str(final_time - initial_time)


if __name__ == '__main__':
    app.run()