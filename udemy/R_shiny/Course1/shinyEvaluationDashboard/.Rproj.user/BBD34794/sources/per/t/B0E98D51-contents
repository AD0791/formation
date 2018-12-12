library(tidyverse)
library(stringr)




msum = function(d,fby,fvalue = " ",grvalue){
d%>%
  select_if(is.atomic)%>%
  filter(str_detect(!! rlang::sym(fby),fvalue))%>%
  group_by(!!! rlang::syms(grvalue)) %>%
  summarise_if(is.numeric,mean,na.rm=T)
}



