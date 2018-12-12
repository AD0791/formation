//
//  main.cpp
//  cpp_learning
//  For the purpose of learning cpp: Udemy and Youtube tutorial
//  Created by Alexandro Disla on 9/9/18.
//  Copyright © 2018 Alexandro Disla. All rights reserved.
/////////////////////////////////
/*#include <iostream>
using namespace std;
int main(){
    int kont {100};
    int prek;
    cout<<"ok: "<<kont<<endl;
    prek = ++kont;
    cout<<"Posfix incrementattion: "<<prek<<endl;
    return 0;
}*/
/*#include <iostream>
using namespace std;
int main(){
    int kiki {10};
    int kont {10};
    int prek {10};
    int posk {10};
    int resu {0};
    int resul {0};
    // prefix
    cout<<"ok: "<<kont<<endl;
    prek = ++kont;
    resu = prek + kont;
    cout<<"Prefix incrementattion: "<<resu<<endl;
    // posfix
    cout<<"Now: "<<kiki<<endl;
    posk = kiki++;
    resul = posk + kiki;
    cout<<"Posfix incrementattion: "<<resul<<endl;
    return 0;
}*/
//#include <iostream>
//using namespace std;
//int main(){
//    int tot {};
//    int n1{},n2{},n3{};
//    const int kont{3};
//
//    cout<<"Enter 3 integers separated by spaces: ";
//    cin>>n1>>n2>>n3;
//
//    tot = n1+n2+n3;
//
//    double moyenne {0.0};
//    moyenne = static_cast<double>(tot)/kont;
//
//    cout<<"The 3 numbers were "<<n1<<","<<n2<<","<<n3<<endl;
//    cout<< "The somme of the numbers is "<<tot<<endl;
//    cout<<"The average of the numbers is "<<moyenne<<endl;
//    return 0;
//}
#include <iostream>
using namespace std;
int main(){
    const int doll {100};
    const int quart {25};
    //     const int dime {10};
    //     const int nickel {5};
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
