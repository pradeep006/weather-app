import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../app/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  city: string = '';
  cityName: string = '';
  temperature: number | null = null;
  humidity: number | null = null;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    
  }

  searchWeather() {
    if (this.city.trim()) {
      this.weatherService.getWeather(this.city).subscribe(
        data => {
          this.cityName = data.name;
          this.temperature = data.main.temp;
          this.humidity = data.main.humidity;
          this.error = null;
        },
        error => {
          this.error = 'City not found or an error occurred.';
          this.temperature = null;
          this.humidity = null;
        }
      );
    }
  }
}
