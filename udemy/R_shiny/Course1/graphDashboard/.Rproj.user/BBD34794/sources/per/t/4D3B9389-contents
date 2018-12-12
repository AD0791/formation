library(igraph)
library(visNetwork)

mmg = function(n=60){
g = make_tree(n,children = 3)%>%
  set_vertex_attr("group",value = sample(c('x','y','z'),n,replace = T))%>%
  set_vertex_attr("size",value = sample(1:3*30,n,replace = T))
}

pg = function(g){
visIgraph(g,layout = "layout_as_tree",circular=T)%>%
  visLegend()
}

