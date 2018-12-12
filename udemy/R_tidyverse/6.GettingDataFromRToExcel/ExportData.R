library(tidyverse)

dt <- read_csv("EmployeeDataProcessed.csv")

dt %>% 
  # filter(county == "LEWIS AND CLARK") %>%
  group_by(department,county,city) %>% 
  summarise_if(is.numeric,sum) %>% 
  write_csv("EmployeeSummarised.csv")

