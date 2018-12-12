#include <iostream>
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
}