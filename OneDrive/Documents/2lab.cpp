#include <iostream>
#include <cmath>
using namespace std;
int main() {
    setlocale(LC_ALL,"Russian");
        double f, x, a;
        cout<<"¬ведите x";
        cin>>x;
        cout<<"¬ведите a";
        cin>>a;
        if( x<2 and x>0 ){
            f=pow(x-a,1/3)+ log(x);
        }
        if(x>2 and x<5){
            f= pow(x+a,1/4)+ exp(-x);
        }
        if(x>5){
            f=0;
        }
        cout<<"f= "<<f<< endl;


    return 0;
}

