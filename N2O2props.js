const R = 8.3144598; //Molar gas constant in J/mol-K
const N2 = {}; //Nitrogen
const O2 = {}; //Oxygen

//Names
N2.Name = "Nitrogen";
O2.Name = "Oxygen";

//Triple points in K and Pa
N2.Tt = 63.149;     N2.Pt = 12520;
O2.Tt = 54.361;     O2.Pt = 150;

//Critical points in K and Pa
N2.Tc = 126.2;      N2.Pc = 3400000; 
O2.Tc = 154.58;     O2.Pc = 5043000;

//Accentric Factors
N2.Omega = 0.0377215;
O2.Omega = 0.0221798;

//Liquid vapor pressure equation parameters
N2.PLpars = ["Eq101", 58.282, -1084.1, -8.3144, 0.044127, 1];
O2.PLpars = ["Eq101", 51.245, -1200.2, -6.4361, 0.028405, 1];

//DIPPR 101 Vapor Pressure Equation
function Eq101(T, A, B, C, D, E) {
    return Math.exp(A + B / T + C * Math.log(T) + D * T ** E);
}

//Vapor Pressure Eq101
function Psat(i,T) {
    return Eq101(T, i.PLpars[1],  i.PLpars[2], i.PLpars[3], i.PLpars[4], i.PLpars[5]);
}
