#include <iostream>
#include <ctime>
#include <vector>
#include "httplib.h"

using namespace std;

int main()
{
    httplib::Server server;
    server.Get("/time", [](const httplib::Request &req, httplib::Response &res)
               {
                   // now we will write a short program that computes sum of 1000000 numbers
                   auto start = std::chrono::high_resolution_clock::now();
                   std::vector<int> arr(100000000);
                   for (int i = 0; i < 100000000; i++)
                   {
                       arr[i] = i;
                   }
                   int sum = 0;
                   for (int i : arr)
                   {
                       sum += i;
                   }
                   auto end = std::chrono::high_resolution_clock::now();
                   double time_taken = std::chrono::duration_cast<std::chrono::duration<double> >(end - start).count();
                   cout << "Time taken by program is : " << time_taken << " seconds" << endl;

                   res.set_content(to_string(time_taken), "text/plain");
               });
    server.listen("localhost", 8080);
}