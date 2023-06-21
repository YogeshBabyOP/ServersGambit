import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class Main {
    public static void main(String[] args) throws IOException {
        System.out.println("running on http://localhost:8088/time");
        HttpServer server = HttpServer.create(new InetSocketAddress(8088), 0);
        server.createContext("/time", new TimeHandler());
        server.setExecutor(null);
        server.start();
    }

    static class TimeHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            long startTime = System.currentTimeMillis();
            int[] array = new int[10000000];
            for (int i = 0; i < array.length; i++) {
                array[i] = i;
            }
            long sum = 0;
            for (int value : array) {
                sum += value;
            }
            long endTime = System.currentTimeMillis() - startTime;

            String response = "JavaGOD time " + endTime;

            exchange.sendResponseHeaders(200, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
