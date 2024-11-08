<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Forecast</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        .weather-info {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Weather Forecast</h1>
    <input type="text" id="city" placeholder="Enter city" />
    <button onclick="getWeather()">Get Weather</button>
    
    <div class="weather-info" id="weather-info"></div>

    <script src="script.js"></script>
</body>
</html>
