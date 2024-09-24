"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CloudIcon,
  SunIcon,
  ThermometerIcon,
  UmbrellaIcon,
  WindIcon,
} from "lucide-react";
import { TestData } from "@/constants";

const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(1);

const formatDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

const getWeatherIcon = (main: string) => {
  switch (main) {
    case "Clear":
      return <SunIcon className="w-6 h-6 text-yellow-400" />;
    case "Clouds":
      return <CloudIcon className="w-6 h-6 text-gray-400" />;
    case "Rain":
      return <UmbrellaIcon className="w-6 h-6 text-blue-400" />;
    default:
      return <ThermometerIcon className="w-6 h-6 text-red-400" />;
  }
};

export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TestData;
        const data = TestData;
        setWeatherData(data);
        setLoading(false);
        console.log("weatherData", weatherData);
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading)
    return <div className="text-center">Loading weather data...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!weatherData)
    return <div className="text-center">No weather data available</div>;

  const { current, daily } = weatherData;
  console.log("testData", TestData);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-6">
        Weather in {weatherData.timezone}
      </h1>
      <Carousel className="">
        <CarouselContent className="text-sm">
          <CarouselItem key="current">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-sm">
                  Current Weather in {weatherData.timezone}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center">
                  {getWeatherIcon(current.weather[0].main)}
                  <span className="ml-2 text-2xl font-bold">
                    {kelvinToCelsius(current.temp)}°C
                  </span>
                </div>
                <div>{current.weather[0].description}</div>
                <div className="flex items-center">
                  <WindIcon className="w-5 h-5 mr-1" />
                  {current.wind_speed} m/s
                </div>
                <div>Humidity: {current.humidity}%</div>
              </CardContent>
            </Card>
          </CarouselItem>
          {daily.slice(1).map((day: any, index: number) => (
            <CarouselItem key={day.dt}>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-sm">
                    Forecast for {formatDate(day.dt)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {getWeatherIcon(day.weather[0].main)}
                      <span className="ml-2 text-2xl font-bold">
                        {kelvinToCelsius(day.temp.day)}°C
                      </span>
                    </div>
                    <div>{day.weather[0].description}</div>
                    <div className="flex items-center">
                      <WindIcon className="w-5 h-5 mr-1" />
                      {day.wind_speed} m/s
                    </div>
                    <div>Humidity: {day.humidity}%</div>
                  </div>
                  <div className="flex flex-row mt-2">{day.summary}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
