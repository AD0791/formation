library(tidyverse)
library(forecast)
library(highcharter)

hchart(mpg, "scatter", 
       hcaes(x = displ, y = hwy, group = class))

forecast(AirPassengers) %>% hchart()
