package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/time", func(w http.ResponseWriter, r *http.Request) {
		startTime := time.Now()
		array := make([]int, 10000000)
		for i := 0; i < 10000000; i++ {
			array[i] = i
		}
		sum := 0
		for _, v := range array {
			sum += v
		}
		endTime := time.Since(startTime).Seconds()

		fmt.Println("total time: ", endTime)

		// now we can write endtime into response body

		// w.Write([]byte(fmt.Sprintf("golang total time is yogeshGOD: %f", endTime)))

		_, err := w.Write([]byte(fmt.Sprintf("GolangGOD time : %f", endTime)))

		if err != nil {
			return
		}
	})
	err := http.ListenAndServe(":8082", nil)
	if err != nil {
		return
	}
}
