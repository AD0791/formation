library(tidyquant)
library(plotly)

#get list of function
tq_mutate_fun_options()

#The function

gsd = function(t="AMZN",fdate=today()-90,tdate=today()){
dt = tq_get(t,from=fdate,to=tdate)
dt %>% tq_mutate(select = close,mutate_fun = EMA)
}

psd = function(dt){
dt %>% plot_ly(type = "candlestick",
               x=~date,open=~open,
               close=~close,high=~high,
               low=~low)%>%
add_lines(~date,y~EMA,name="EMA")
}









