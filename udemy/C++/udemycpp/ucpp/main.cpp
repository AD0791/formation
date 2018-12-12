#include <iostream>
 using namespace std;
 
 int main(){
	 const int doll {100};
	 const int quart {25};
//	 const int dime {10};
//	 const int nickel {5};
	 int chanval {};
	 
	 // modulo
	 cout<<"Enter the amount in cents: ";
	 cin>>chanval;
	 
	 int bal{},dol{},qu{},penn{};
	 
	 dol = chanval / doll;
	 bal = chanval - (dol*doll);
	 
	 qu = bal / quart;
	 bal -= qu*quart;
	 
	 penn =bal;
	 
	 cout<<dol<<endl;
	 cout<<qu<<endl;
	 cout<<penn<<endl;
	
	 return 0;
	 
	 }